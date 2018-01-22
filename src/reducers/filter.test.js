import { filter as filterReducer } from './filter';
import * as types from 'constants/filterConstants';

const initialState = 'ALL';

describe('filter reducer', () => {

    it('should return the initial state', () => {
        expect(filterReducer(undefined, {}))
            .toEqual(initialState)
    });

    it('should handle change filter', () => {
        const filter = 'COMPLETED';
        const action = {
            type: types.TODO_FILTER_CHANGE,
            filter
        };

        expect(filterReducer(initialState, action))
            .toEqual(filter)
    });
})
