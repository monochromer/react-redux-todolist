import { combineReducers } from 'redux';

import { todo, todosById, todosIds } from './todos';
import * as todoTypes from 'constants/todoConstants';
import * as filterTypes from 'constants/filterConstants';

const initialState = {
    todosById: {},
    todosIds: []
};

const todoReducer = combineReducers({
    todosById,
    todosIds
});

describe('todos reducer', () => {

    it('should return the initial state', () => {
        expect(todoReducer(undefined, {}))
            .toEqual(initialState)
    });
});
