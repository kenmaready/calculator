const NEW_ACTION = 'NEW_ACTION';

export const newAction = (calcKeyObject) => {
    return ({ type: NEW_ACTION, payload: calcKeyObject });
};
