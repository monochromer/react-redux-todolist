import * as langConstants from 'constants/langConstants';
import createReducer from './createReducer';

export const lang = createReducer('en', {
    [langConstants.LANG_CHANGE](state, action) {
        return action.lang;
    }
});
