import { combineReducers } from 'redux';
import { todo, todosById, todosIds} from './todos';
import { filter } from './filter';

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
        default:
            return allTodos;
    }
};


const rootReducer = combineReducers({
    todosById,
    todosIds,
    filter
});

export default rootReducer;
export { filterTodos };
