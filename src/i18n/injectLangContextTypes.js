import PropTypes from 'prop-types';

const contextTypes = {
    locale: PropTypes.func,
    lang: PropTypes.string
}

const injectLangContextTypes = Component => {
    return Object.assign(Component, { contextTypes });
}

export default injectLangContextTypes;
