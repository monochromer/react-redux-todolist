import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { langChange } from '../../actions/langActions';
import Control from 'components/Controls'

class LangContainer extends Component {
    render() {
        const { lang, onChange } = this.props;
        const handleChange = (e) => this.props.onChange(e.target.value);

        return (
            <Fragment>
                <Control
                    text='ru'
                    value='ru'
                    type='radio'
                    name='lang'
                    checked={lang === 'ru'}
                    onChange={handleChange}
                />
                <Control
                    text='en'
                    value='en'
                    type='radio'
                    name='lang'
                    checked={lang === 'en'}
                    onChange={handleChange}
                />
            </Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    lang: state.lang
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (lang) => dispatch(langChange(lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(LangContainer)
