import * as langConstants from 'constants/langConstants';
import createReducer from './createReducer';

export const lang = createReducer('ru', {
    [langConstants.LANG_CHANGE](state, action) {
        return action.lang;
    }
});
