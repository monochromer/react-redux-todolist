import { getId } from 'utils';
import * as constants from 'constants/todoConstants';

export const addTodo = (text) => ({
    type: constants.TODO_ADD,
    id: getId(),
    text: text,
    completed: false
});

export const toggleTodo = (id) => ({
    type: constants.TODO_TOGGLE,
    id
});

export const updateTodo = ({ id, text, completed }) => ({
    type: constants.TODO_UPDATE,
    id,
    text,
    completed
});

export const deleteTodo = (id) => ({
    type: constants.TODO_DELETE,
    id
});
