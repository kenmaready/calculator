import { combineReducers } from 'redux';

const NEW_ACTION = 'NEW_ACTION';
const OFF = 0;
const ON = 1;
const INITIAL_STATE = {currVal: 0, displayVal: '0', currOperator: '+', displayOperator: '', tempDisplay: ON}

const keyReducer = (state = INITIAL_STATE, action) => {
    if (action.type===NEW_ACTION) {
            if ('0123456789'.includes(action.payload.digit)) {
                if (state.tempDisplay===ON) { return {...state, displayVal: action.payload.digit, displayOperator: '', tempDisplay: OFF }; }
                else if (state.displayVal==='0') { return {...state, displayVal: action.payload.digit, displayOperator: ''}; }
                else if (state.displayVal.length > 24) { return state; }
                else { return {...state, displayVal: state.displayVal + action.payload.digit, displayOperator: '' }; }
            } else if (action.payload.digit==='.') {
                if (state.displayVal.includes('.')) { return state; }
                else if (state.tempDisplay) { return {...state, displayVal: '0.', displayOperator: '', tempDisplay: OFF }; }
                else {return {...state, displayVal: state.displayVal + action.payload.digit, displayOperator: '' }; }
            } else if (action.payload.digit==="ac") {
                return INITIAL_STATE;
            } else if (action.payload.desc==="equals") {
                let newVal = calculate(state.currVal, state.currOperator, Number(state.displayVal));
                return { ...INITIAL_STATE, currVal: newVal, displayVal: newVal.toString(), tempDisplay: ON }
            } else {
                if (state.tempDisplay) {
                    return { ...state, currOperator: action.payload.digit, displayOperator: action.payload.digit };
                } else {
                    let newVal = calculate(state.currVal, state.currOperator, Number(state.displayVal));
                    return { ...state, currVal: newVal, displayVal: newVal.toString(), currOperator: action.payload.digit, displayOperator: action.payload.digit, tempDisplay: ON };
                }
            }
    } else {
        return state;
    }
}

function calculate(x, oper, y) {
    switch(oper) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        default:
            return -999999;
    }
};



export default combineReducers({
    key: keyReducer
})