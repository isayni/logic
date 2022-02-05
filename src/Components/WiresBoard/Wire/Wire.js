import React from 'react';
import Pin from '../../LogicGate/Pin';
import styles from './Wire.module.scss';

import reactDom from 'react-dom';

function calculatePathRight(firstPinCoordinates, secondPinCoordinates) {
    const verticalDistance = secondPinCoordinates[1] - firstPinCoordinates[1];
    const horizontalDistance = secondPinCoordinates[0] - firstPinCoordinates[0];

    // jezeli docelowy punkt jest nizej:
    // ostatnie 3 wartosci a1: 1 20,20
    // jezeli jest wyzej:
    // ostatnie 3 wartosci a1: 0 20,-20
    let a1, a2, roundings;
    if (verticalDistance < -25) {
        a1 = "a20,20 0 0 0 12,-12"
        a2 = "a20,20 0 0 1 12 -12"
    } else if (verticalDistance > 25) {
        a1 = "a20,20 0 0 1 12 12";
        a2 = "a20,20 0 0 0 12 12"
    }

    if (a1) {
        roundings =
            `
                l ${[horizontalDistance / 2, 0]}
                ${a1} 

                l ${[ 0, verticalDistance < 0 ? verticalDistance + 25 : verticalDistance - 25 ]} 
                ${a2}
                `
    } else {
        roundings = "";
    }

    return `M ${firstPinCoordinates} 

            ${roundings}

        L ${secondPinCoordinates}
        `
}

function calculatePathLeft(firstPinCoordinates, secondPinCoordinates, paddings) {
    const verticalDistance = secondPinCoordinates[1] - firstPinCoordinates[1];
    const horizontalDistance = secondPinCoordinates[0] - firstPinCoordinates[0];

    let middleRoute = "";
    const spaceSize = 75;

    // pierwszy pin jest wyzej
    let minVerticalDistance;
    if (verticalDistance > 0) {
        // odleglosc pierwszego (gornego pinu) od dolnej granicy + odleglosc
        // dolnego pinu od gornej granicy
        minVerticalDistance = paddings[0][1] + paddings[1][0] + spaceSize;
    } else {
        minVerticalDistance = paddings[0][0] + paddings[1][1] + spaceSize;
    }

    // zmiesci sie pomiedzy
    if (verticalDistance > minVerticalDistance) {
        middleRoute =
        `
            l 0,${ verticalDistance / 2 }
            l ${horizontalDistance - 50}, 0
            L ${ secondPinCoordinates[0] - 25}, ${secondPinCoordinates[1]}
       `
    } else {
        middleRoute = 
        `
            l 0, ${ 2 * paddings[0][0] }
            l ${horizontalDistance - 50}, 0
            L ${ secondPinCoordinates[0] - 25}, ${secondPinCoordinates[1]}
        `
    }

    // zawsze wychodzi 25 w prawo i o 
    // jezeli sie zmiesci
    return `
        M ${firstPinCoordinates}
        l 25, 0
        ${middleRoute}
        
        L ${secondPinCoordinates}
    `
}

function calculatePath(firstPinBoundingClient, secondPinBoundingClient, paddings) {

    //const firstPinBoundingClient = firstPin.getBoundingClientRect();
    const firstPinCoordinates = [firstPinBoundingClient.left, firstPinBoundingClient.top];

    //const secondPinBoundingClient = secondPin.getBoundingClientRect();
    const secondPinCoordinates = [secondPinBoundingClient.left, secondPinBoundingClient.top];

    // pozycje rowno w srodku pinu
    firstPinCoordinates[1] += firstPinBoundingClient.height / 2;
    firstPinCoordinates[0] += firstPinBoundingClient.width / 2;
    secondPinCoordinates[1] += secondPinBoundingClient.height / 2;
    secondPinCoordinates[0] += secondPinBoundingClient.width / 2;

    // M - MOVE TO (WEDLUG POZYCJI BEWZGLEDNEJ)
    // L - LINE TO (WEDLUG POZYCJI BEZWZGLEDNEJ)
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path
    // przewod idzie od wyjscia do wejscia

    // jezeli docelowy punkt jest na prawo
    if (secondPinCoordinates[0] > firstPinCoordinates[0])
        return calculatePathRight(firstPinCoordinates, secondPinCoordinates)
    else
        // punkt docelowy jest na lewo / na rowni
        return calculatePathLeft(firstPinCoordinates, secondPinCoordinates, paddings)


}
class Wire extends React.Component {

    constructor(props) {

        super(props);

        // przechowujemy te piny, ktore dotycza bramek (a nie wezly startowe i koncowe)

        const gatePins = [
            props.firstPin,
            props.secondPin,

        ].filter(pin => pin instanceof Pin);

        // pozycje pinow zostaja zaktualizowane, gdy przejezdzamy mysza po bramce
        for (let pin of gatePins) {
            // tymczasowo - TODO uzycie referencji do elementu html
            reactDom.findDOMNode(pin.gate).addEventListener('mousemove', this.updatePosition);
        }

        this.firstPin = props.firstPin;
        this.secondPin = props.secondPin;

        this.state = {
            // pozycje pinow w momencie stworzenia polaczenia
            "firstPinPosition": props.firstPin.state.ref.current.getBoundingClientRect(),
            "secondPinPosition": props.secondPin.state.ref.current.getBoundingClientRect(),
        };

        // przyda sie do lepszego zaginania polaczen -
        // [ odleglosc od gornej granicy bramki, odleglosc od dolnej granicy brmaki ]
        if (this.firstPin.gate) {
            this.firstPinPaddings = [
                reactDom.findDOMNode(this.firstPin.gate).getBoundingClientRect().top - this.state.firstPinPosition.top,
                reactDom.findDOMNode(this.firstPin.gate).getBoundingClientRect().bottom - this.state.firstPinPosition.bottom
            ]
        } else this.firstPinPaddings = [0, 0];

        if (this.secondPin.gate) {
            this.secondPinPaddings = [
                this.state.firstPinPosition.top - reactDom.findDOMNode(this.firstPin.gate).getBoundingClientRect().top,
                reactDom.findDOMNode(this.firstPin.gate).getBoundingClientRect().bottom - this.state.firstPinPosition.bottom
            ]
        } else this.secondPinPaddings = [0, 0];


    }

    // funkcja powodujaca aktualizacje pozycji pinow w stanie
    updatePosition = () => {
        this.setState({
            "firstPinPosition": this.firstPin.state.ref.current.getBoundingClientRect(),
            "secondPinPosition": this.secondPin.state.ref.current.getBoundingClientRect(),
        });
    }

    render() {
        return <path d = {
            calculatePath(this.state.firstPinPosition, this.state.secondPinPosition,
                [this.firstPinPaddings, this.secondPinPaddings])
        }
        className = {
            styles.Wire
        }
        />
    }
}

export default Wire;