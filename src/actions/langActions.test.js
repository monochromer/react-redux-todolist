import * as constants from 'constants/langConstants';
import { langChange } from './langActions';

describe('actions', () => {
    it('should create an action change language', () => {

        const lang = 'en';
        const expectedAction = {
            type: constants.LANG_CHANGE,
            lang
        };

        expect(langChange(lang))
            .toEqual(expectedAction);
    });
});
