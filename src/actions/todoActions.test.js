import * as constants from 'constants/todoConstants';
import { addTodo, toggleTodo, updateTodo, deleteTodo } from './todoActions';

describe('actions', () => {

    it('should create an action to add todo', () => {
        const text = 'Buy milk';
        const expectedAction = {
            type: constants.TODO_ADD,
            text,
            completed: false
        };

        expect(addTodo(text))
            .toMatchObject(expectedAction);
    });

    it('should create an action to delete todo', () => {
        const id = 1;
        const expectedAction = {
            type: constants.TODO_DELETE,
            id
        };

        expect(deleteTodo(id))
            .toEqual(expectedAction);
    });

    it('should create an action to toggle todo', () => {
        const id = 1;
        const expectedAction = {
            type: constants.TODO_TOGGLE,
            id
        };

        expect(toggleTodo(id))
            .toEqual(expectedAction);
    });

    it('should create an action to update todo', () => {
        const id = 1;
        const text = 'Buy milk';
        const completed=  true;

        const expectedAction = {
            type: constants.TODO_UPDATE,
            id,
            text,
            completed
        };

        expect(updateTodo({ id, text, completed }))
            .toMatchObject(expectedAction);
    });
});

