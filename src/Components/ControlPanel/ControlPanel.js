import styles from './ControlPanel.module.scss';
import DummyGate from '../DummyGate/DummyGate';
import {retrieveFunction} from '../../functions';
import {AND, NOT, OR} from "../../logicalFunctions"
import React from "react";

class ControlPanel extends React.Component {

    constructor(props){
        super();
        this.state = {
            // NAZWA BRAMKI MUSI BYĆ TAKA SAMA JAK NAZWA JEJ FUNKCJI
            dummies: [
                <DummyGate
                    gateName={ "AND" }
                    function={AND}
                    inputs={ 2 }
                    outputs={ 1 }
                    addGate={props.addGate}
                />,
                <DummyGate
                gateName={ "NOT" }
                    function={NOT}
                    inputs={ 1 }
                    outputs={ 1 }
                    addGate={props.addGate}
                />,
                <DummyGate
                gateName={ "OR" }
                    function={OR}
                    inputs={ 2 }
                    outputs={ 1 }
                    addGate={props.addGate}
                />,
            ],
        }
    }
    addDummy = (newGate) => {
        let dummies = this.state.dummies;
        const func = retrieveFunction(newGate.functions);

        // zrób tą funkcję dostępną globalnie
        global[newGate.name] = func;

        const newDummy = (
            <DummyGate
            gateName={ newGate.name }
                function={ func }
                inputs={ newGate.inputs }
                outputs={ newGate.outputs }
                addGate={ this.props.addGate }
            />
        )
        dummies.push(newDummy);
        this.setState({dummies: dummies});
    }

    render(){
        return (
        <nav className={ styles.ControlPanel }
            ref={this.props.reference}
        >
            {this.state.dummies}
        </nav>
        );
    }
}

export default ControlPanel;
