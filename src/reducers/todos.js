import * as constants from 'constants/todoConstants';
import createReducer from './createReducer';


export const todo = createReducer({}, {
    [constants.TODO_ADD](state, action) {
        return {
            id: action.id,
            text: action.text,
            completed: false
        };
    },

    [constants.TODO_TOGGLE](state, action) {
        if (state.id !== action.id) {
            return state;
        };

        return {
            ...state,
            completed: !state.completed
        };
    }
});


export const todosById = createReducer({}, {
    [constants.TODO_ADD](state, action) {
        return {
            ...state,
            [action.id]: todo(state[action.id], action)
        };
    },

    [constants.TODO_TOGGLE](state, action) {
        return {
            ...state,
            [action.id]: todo(state[action.id], action)
        };
    },

    [constants.TODO_DELETE](state, action) {
        let curState = Object.assign({}, state);
        delete curState[action.id];
        return curState;
    }
});


export const todosIds = createReducer([], {
    [constants.TODO_ADD](state, action) {
        return [...state, action.id];
    },

    [constants.TODO_DELETE](state, action) {
        return state.filter(id => id !== action.id);
    }
});
