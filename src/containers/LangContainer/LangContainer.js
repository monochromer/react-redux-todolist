import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { langChange } from '../../actions/langActions';
import Control from 'components/Controls';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';

class LangContainer extends Component {
    get langs() {
        return ['ru', 'en'];
    }

    changeLang = (lang) => this.props.onChange(lang)

    onClick = (e) => {
        const { name, value } = e.target;
        if (name !== 'lang') return;
        this.changeLang(value);
        e.preventDefault();
    }

    render() {
        const { lang: currentLang, onChange } = this.props;
        const handleChange = (e) => this.props.onChange(e.target.value);

        return (
            <ButtonGroup>
                {
                    this.langs.map(lang => {
                        return (
                            <Button
                                key={lang}
                                className='ButtonGroup-Item'
                                name='lang'
                                value={lang}
                                onClick={this.onClick}
                                active={lang === currentLang}
                            >
                                {lang}
                            </Button>
                        )
                    })
                }
            </ButtonGroup>
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
