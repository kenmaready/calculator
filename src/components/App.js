import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import CalcKey from './CalcKey';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { numPad: [{digit: "7", desc: "seven", type: 'number', keyCode: 55},
                                {digit: "8", desc: "eight", type: 'number', keyCode: 56},
                                {digit: "9", desc: "nine", type: 'number', keyCode: 57},
                                {digit: "*", desc: "multiply", type: 'operator', keyCode: 42},
                                {digit: "4", desc: "four", type: 'number', keyCode: 52},
                                {digit: "5", desc: "five", type: 'number', keyCode: 53},
                                {digit: "6", desc: "six", type: 'number', keyCode: 54},
                                {digit: "/", desc: "divide", type: 'operator', keyCode: 47},
                                {digit: "1", desc: "one", type: 'number', keyCode: 49},
                                {digit: "2", desc: "two", type: 'number', keyCode: 50},
                                {digit: "3", desc: "three", type: 'number', keyCode: 51},
                                {digit: "+", desc: "add", type: 'operator', keyCode: 43},
                                {digit: "ac", desc: "clear", type: 'calcFunction', keyCode: 99},
                                {digit: ".", desc: "decimal", type: "decimal", keyCode: 46},
                                {digit: "0", desc: "zero", type: 'number', keyCode: 48},
                                {digit: "-", desc: "subtract", type: 'operator', keyCode: 45},
                                {digit: "=", desc: "equals", type: 'calcFunction', keyCode: 13}]
        };
    }

    renderNumPad = () => {
        let numPad = this.state.numPad.map( (elt) => {
            return (
                    <CalcKey key={elt.desc} elt={elt} />
            );
        });
        return numPad;
    }

    render() {
        return (
            <div className="ui container">
                <h2>javaScript calculator</h2>
                <div className="ui grid calculator">
                    <div className="row">
                        <div id="display" className="ui segment">{this.props.displayVal}                        {this.props.displayOperator}</div>
                    </div>
                    <div>
                        <div className="ui segment">
                            <div className="row">
                                {this.renderNumPad()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        displayVal: state.key.displayVal,
        displayOperator: state.key.displayOperator
    };
};

export default connect(mapStateToProps)(App);