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

const todos = (state = [], action) => {
    switch (action.type) {
        case constants.TODO_ADD:
            return [
                ...state,
                todo(undefined, action)
            ];

        case constants.TODO_TOGGLE:
            return state.map(t => todo(t, action));

        case constants.TODO_DELETE:
            return state.filter(todo => todo.id !== action.id);

        default:
            return state;
    }
}

const filter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case filterConstants.TODO_FILTER_CHANGE:
            return action.filter;

        default:
            return state;
    }
}

// const root = (state = {}, action) => ({
//     todos: todos(state.todos, action),
//     filter: filter(state.filter, action)
// });

const root = combineReducers({
    todos,
    filter
});

export default root;

// todos selector
export const filterTodos = (state, filter) => {
    switch(filter) {
        case 'completed':
            return state.filter(todo => todo.completed);

        case 'active':
            return state.filter(todo => !todo.completed);

        case 'all':
        default:
            return state;
    }
}
