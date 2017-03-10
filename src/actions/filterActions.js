import * as constants from 'constants/filterConstants';

export const filterChange = (filter) => ({
    type: constants.TODO_FILTER_CHANGE,
    filter
});
