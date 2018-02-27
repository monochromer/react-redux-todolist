import { langReducer } from './lang';
import * as types from 'constants/langConstants';

const initialState = 'ru';

describe('lang reducer', () => {

    it('should return the initial state', () => {
        expect(langReducer(undefined, {}))
            .toEqual(initialState)
    });

    it('should handle change filter', () => {
        let lang, action;
        lang = 'ru';
        action = {
            type: types.LANG_CHANGE,
            lang
        };

        expect(langReducer(initialState, action))
            .toEqual(lang);

        lang = 'en';
        action = {
            type: types.LANG_CHANGE,
            lang
        };

        expect(langReducer(initialState, action))
            .toEqual(lang)
    });
})
