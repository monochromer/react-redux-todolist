import { combineReducers } from 'redux';
import { todo, todosById, todosIds } from './todos';
import { filter } from './filter';
import * as filterTypes from 'constants/filterConstants';
import { createSelector } from 'reselect'

// todos selector
const getAllTodos = (state) => {
    return state.todosIds.map(id => state.todosById[id]);
};

const getTodos = (state, props) => getAllTodos(state);
const getFilterFromState = (state, props) => state.filter;
const getFilterFromProps = (state, props) => props.filter;

const getMemoFilteredTodos = (allTodos, filter) => {
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
    [getTodos, getFilterFromState],
    getMemoFilteredTodos
);

const memoFilter = createSelector(
    [getTodos, getFilterFromProps],
    getMemoFilteredTodos
);

const rootReducer = combineReducers({
    todosById,
    todosIds,
    filter
});

export default rootReducer;
export { memoTodos, memoFilter };
