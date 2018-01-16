import { combineReducers } from 'redux';
import { todo, todosById, todosIds} from './todos';
import { filter } from './filter';
import { createSelector } from 'reselect'

// todos selector
const getAllTodos = (state) => {
    return state.todosIds.map(id => state.todosById[id]);
};

const filterTodos = (state, filter) => {
    const allTodos = getAllTodos(state);
    switch(filter) {
        case 'COMPLETED':
            return allTodos.filter(todo => todo.completed);

        case 'ACTIVE':
            return allTodos.filter(todo => !todo.completed);

        case 'ALL':
            return allTodos;
        default:
            return allTodos;
    }
};

const memoTodos = createSelector(
    function getTodos(state, props) { return getAllTodos(state); },
    function getFilter(state, props) { return state.filter; },
    function getMemoFilteredTodos(allTodos, filter) {
        switch(filter) {
            case 'COMPLETED':
                return allTodos.filter(todo => todo.completed);

            case 'ACTIVE':
                return allTodos.filter(todo => !todo.completed);

            case 'ALL':
            default:
                return allTodos;
        }
    }
);

const memoFilter = createSelector(
    function getTodos(state, props) { return getAllTodos(state); },
    function getFilter(state, props) { return props.filter; },
    function getMemoFilteredTodos(allTodos, filter) {
        switch(filter) {
            case 'COMPLETED':
                return allTodos.filter(todo => todo.completed);

            case 'ACTIVE':
                return allTodos.filter(todo => !todo.completed);

            case 'ALL':
            default:
                return allTodos;
        }
    }
);

const rootReducer = combineReducers({
    todosById,
    todosIds,
    filter
});

export default rootReducer;
export { filterTodos, memoTodos, memoFilter };
