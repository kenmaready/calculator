import React from 'react';
import { connect } from 'react-redux';
import { newAction } from '../actions';

import './CalcKey.css';

class CalcKey extends React.Component {

    componentDidMount() {
        document.addEventListener("keypress", this.keyPressHandler);
    }

    keyPressHandler = (event) => {
        if (event.keyCode===this.props.elt.keyCode) {
            this.props.newAction(this.props.elt);
        };
    }
    
    onClickHandler = () => {
        this.props.newAction(this.props.elt);
    }

    render() {
        return (
            <button key={this.props.elt.digit} id={this.props.elt.desc} className="ui secondary basic button calcKey" onClick={this.onClickHandler}>{this.props.elt.digit}</button>
        )
    }
}

export default connect(null, { newAction : newAction })(CalcKey);