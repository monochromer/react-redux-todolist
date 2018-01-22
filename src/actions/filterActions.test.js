import * as constants from 'constants/filterConstants';
import { filterChange } from './filterActions';

describe('actions', () => {
    it('should create an action change filter', () => {

        const filter = 'ALL';
        const expectedAction = {
            type: constants.TODO_FILTER_CHANGE,
            filter
        };

        expect(filterChange(filter))
            .toEqual(expectedAction);
    });
});
