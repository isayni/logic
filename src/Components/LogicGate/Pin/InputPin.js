import React from "react";
import parentChange from "../../../Events/parentChange";
import Pin from "./Pin";

class InputPin extends Pin {
    constructor(props) {
        super(props);

        this.setStateClass();
    }

    state = {
        parentPin: undefined,
        value: undefined,
        ref: React.createRef(),
    }

    handleOnClick = () => {
        const newParent = this.props.getFocusedElement();
        if (newParent) this.changeParentPin(newParent);
    };

    disconnect() {
        if (!this.state.parentPin) return;
        this.state.parentPin.disconnect(this);
        this.setState({
            parentPin: undefined,
            stateClass: "",
        });
        this.receiveSignal(undefined);
    }

    // zmień do jakiego outputa podłączony jest ten input
    changeParentPin(newParent) {
        if (this.state.parentPin !== newParent) {
            if (this.state.parentPin) this.state.parentPin.disconnect(this);
            newParent.connect(this);
            this.setState(
                {
                    parentPin: newParent,
                },
                () => this.state.ref.current.dispatchEvent(parentChange)
            );

            this.receiveSignal(newParent.state.value);
            this.props.drawWire(newParent, this);
        }
    }

    receiveSignal(signal) {
        // zapobiega pętli przy okazji
        if (signal === this.state.value)
            return;

        this.setState({value: signal}, function() {
                this.setStateClass();
                this.gate.processOutput();
            }
        );
    }

    render() {
        return (
            <button
                ref={this.state.ref}
                className={`
                    ${this.style.Pin}
                    ${this.state.stateClass}
                `}
                onClick={this.handleOnClick}
            ></button>
        );
    }
}

export default InputPin;
