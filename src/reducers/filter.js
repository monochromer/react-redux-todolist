import * as filterConstants from 'constants/filterConstants';

export const filter = (state = 'ALL', action) => {
    switch (action.type) {
        case filterConstants.TODO_FILTER_CHANGE:
            return action.filter;

        default:
            return state;
    }
}
