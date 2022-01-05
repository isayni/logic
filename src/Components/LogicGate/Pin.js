import React from "react";
import styles from "./LogicGate.module.scss";

// funkcja, ktora dodaje do tablicy wszystkie bramki pobierajace sygnal z bramki podanej jako argument
function collectChildGates ( childGates, gate ) {

    for (let i = 0; i < gate.outputs.length; i++){
            
        // dodaje wszystkie piny, ktore pobieraja sygnal z aktualnej bramki
        const childPins = gate.outputs[i].state.childPins;

        for (let j = 0; j < childPins.length; j++){
            childGates.push( childPins[j].gate );
        }
    }
}
class Pin extends React.Component {
    constructor( {...props} ) {
        super();
        if(props.pinType === 'output' || props.pinType === 'input') {
            this.index = props.index;
            this.pinType = props.pinType;
            this.gate = props.gate
            this.state = {
                parentPin: undefined, // w sumie to tylko dla input pinów
                childPins: [], // w sumie to tylko dla output pinów
                // mogłaby to być jedna zmienna

                value: undefined,
                recursion: undefined,
            }
        }
        props.mount(this.pinType, this, this.index); // dodaj siebie do tablicy pinów swojej bramki
    }

    // zmień do jakiego outputa podłączony jest ten input
    changeParentPin = () => {

        const newParent = this.props.getFocusedElement();
        newParent.connect(this);
        this.setState({'parentPin': newParent});

        // zmieniamy parent pin, wiec sprawdzamy czy wystepuje rekurencja
        if ( !this.searchForRecursion ) this.receiveSignal(newParent.state.value);
 
    }

    searchForRecursion = () => {

        // this = pin typu input
        // bramka ktorej szukamy (sprawdzamy, czy sie powtarza)
        const searchedGate = this.gate;

        const gates = []; // tablica, w ktorej przechowujemy wszystkie bramki do sprawdzenia

        collectChildGates (gates, searchedGate);

        // dopoki sa jakies bramki do sprawdzenia
        while ( gates.length !== 0 ){

            const actualGate = gates.pop();

            // znalezlismy bramke ktorej poszukiwalismy - jest rekurencja
            if ( actualGate === searchedGate ) return true;

            // dodaje wszystkie bramki, ktore pobieraja sygnal z aktualnej bramki 
            collectChildGates ( gates, actualGate );
            
        }

        return false;
    }

    receiveSignal = (signal) => {

        this.setState({'value': signal}, function() { // setState() nie zmienia state
            // od razu więc resztę kodu dodaję do funkcji callback, inaczej state
            // pozostałby taki jak wcześniej
            if (this.pinType === 'input') {
                this.gate.processOutput();
            } else { // output
                for (let i = 0; i < this.state.childPins.length; i++) {

                    const childPin = this.state.childPins[i];

                    childPin.receiveSignal(signal);
                    
                }
            }
        });
	}

    // przylaczanie innego pina jako dziecko
    connect = (target) => {
        let cps = this.state.childPins;
        cps.push(target);
        this.setState({'childPins': cps});
    }

    render(){
        if (this.pinType === 'input')
            return <button className={ styles.LogicGateInput } onClick={ () => this.changeParentPin() } ></button>;
        // output
        return <button className={ styles.LogicGateOutput } onClick={ () => this.props.setFocusedElement(this) }> </button>;
    }
}

export default Pin;
