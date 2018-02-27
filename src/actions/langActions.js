import * as constants from 'constants/langConstants';

export const langChange = (lang) => ({
    type: constants.LANG_CHANGE,
    lang
});
