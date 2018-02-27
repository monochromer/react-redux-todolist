import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import locale from './locale';
import localeData from './data.json';

export default class Provider extends Component {
    constructor(props, context = {}) {
        super(props, context);
    }

    getChildContext() {
        const lang = this.props.lang;
        return {
            locale: locale(localeData, lang),
            lang
        };
    }

    componentWillReceiveProps(nextProps, nextState, nextContext) {
        const shouldlUpdate = nextProps.lang !== this.props.lang;
        // https://github.com/reactjs/react-redux/issues/311
        if (shouldlUpdate) {
            setTimeout(() => {
                window.location = window.location;
            }, 500);
        }
    }

    render() {
        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        );
    }
};

Provider.propTypes = {
    lang : PropTypes.string.isRequired,
    children : PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]).isRequired
};

Provider.childContextTypes = {
    locale: PropTypes.func,
    lang: PropTypes.string
};
