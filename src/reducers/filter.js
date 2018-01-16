import * as filterConstants from 'constants/filterConstants';
import createReducer from './createReducer';

export const filter = createReducer('ALL', {
    [filterConstants.TODO_FILTER_CHANGE](state, action) {
        return action.filter;
    }
});
