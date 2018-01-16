import * as constants from 'constants/todoConstants';

export const todo = (state = {}, action) => {
    switch (action.type) {
        case constants.TODO_ADD:
            return {
                id: action.id,
                text: action.text,
                completed: false
            };

        case constants.TODO_TOGGLE:
            if (state.id !== action.id) {
                return state;
            };

            return {
                ...state,
                completed: !state.completed
            };

        default:
            return state;
    }
}

export  const todosById = (state = {}, action) => {
    switch (action.type) {
        case constants.TODO_ADD:
        case constants.TODO_TOGGLE:
            return {
                ...state,
                [action.id]: todo(state[action.id], action)
            };

        case constants.TODO_DELETE:
            let curState = Object.assign({}, state);
            delete curState[action.id];
            return curState;

        default:
            return state;
    }
}

export const todosIds = (state = [], action) => {
    switch (action.type) {
        case constants.TODO_ADD:
            return [...state, action.id];
        case constants.TODO_DELETE:
            return state.filter(id => id !== action.id);
        default:
            return state;
    }
};
