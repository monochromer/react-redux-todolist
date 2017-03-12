import {combineReducers} from 'redux';
import * as constants from 'constants/todoConstants';
import * as filterConstants from 'constants/filterConstants';

const todo = (state = {}, action) => {
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

const todosById = (state = {}, action) => {
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

const todosIds = (state = [], action) => {
    switch (action.type) {
        case constants.TODO_ADD:
            return [...state, action.id];
        case constants.TODO_DELETE:
            return state.filter(id => id !== action.id);
        default:
            return state;
    }
};

const filter = (state = 'ALL', action) => {
    switch (action.type) {
        case filterConstants.TODO_FILTER_CHANGE:
            return action.filter;

        default:
            return state;
    }
}

const root = combineReducers({
    todosById,
    todosIds,
    filter
});

export default root;

// todos selector
const getAllTodos = (state) => {
    return state.todosIds.map(id => state.todosById[id]);
};

export const filterTodos = (state, filter) => {
    const allTodos = getAllTodos(state);
    switch(filter) {
        case 'COMPLETED':
            return allTodos.filter(todo => todo.completed);

        case 'ACTIVE':
            return allTodos.filter(todo => !todo.completed);

        case 'ALL':
        default:
            return allTodos;
    }
};
