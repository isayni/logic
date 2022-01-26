import React from 'react';
import Node from './Node';
import styles from './Node.module.scss';


class StartNode extends Node {
    state = {
        value: false,
        childPins: [],

        ref: React.createRef(),

    }

    // przylaczanie innego pina jako dziecko
    connect(target) {
        let cps = this.state.childPins;
        cps.push(target);
        this.setState({'childPins': cps});
    }

    disconnect(target) {
        const oldChildren = this.state.childPins;
        const pinIndex = oldChildren.indexOf(target);

        // tworzymy kopie tablicy dzieci (aby uniknac bezposredniej zmiany stanu)
        let updatedChildren = [...oldChildren];
        updatedChildren.splice (pinIndex, 1);

        // ustawiamy nowa tablice dzieci jako stan
        this.setState({"childPins": updatedChildren });
    }

    handleOnClick = (e) => {
        if(e.button === 0) // Lewy PM
            this.props.setFocusedElement(this);
        else if (e.button === 1) // Środkowy PM
            this.toggleValue();
    }

    toggleValue() {
        const val = !(this.state.value);
        this.setState({value: val}, function() {
            for (let i = 0; i < this.state.childPins.length; i++) {
                this.state.childPins[i].receiveSignal(val);
            }
        });
    }

    render() {
        let style;
        const value = this.state.value;
        // zwróć styl na podstawie wartosci
        if ( value === undefined )
            style = styles.NodeUndefined;
        else if ( value ) style = styles.NodeTrue;
        else style = styles.NodeFalse;

        const position = this.props.position + 'px';

        return (
            <div ref={this.state.ref}
            className={ `${styles.Node} ${style}` } onMouseDown={ this.handleOnClick } style={{ top: position }} >
            </div>
        )
    }
}

export default StartNode;
