import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import i18n from 'i18n';

import LangContainer from 'containers/LangContainer';

import './SettingsArea.css';

class SettingsArea extends Component {
    constructor() {
        super();
        this.state = {
            active: false
        }
    }

    toggle = () => {
        this.setState({ active: !this.state.active });
    }

    render() {
        const { locale } = this.context;

        return (
            <div className={cn('SettingsArea', {
                'SettingsArea_active': this.state.active
            })}>
                <div className='SettingsArea-Overlay' onClick={this.toggle}></div>
                <form className="SettingsArea-Panel">
                    <button
                        className='SettingsArea-Toggle'
                        type='button'
                        onClick={this.toggle}
                    >
                        <svg hidden={this.state.active} width="24" height="24" viewBox="0 0 24 24">
                            <path d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z" />
                        </svg>
                        <svg hidden={!this.state.active} width="24" height="24" viewBox="0 0 24 24">
                            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                        </svg>
                    </button>
                    <fieldset className='SettingsArea-Set'>
                        <legend>{locale('select-lang')}</legend>
                        <LangContainer />
                    </fieldset>
                </form>
            </div>
        );
    }
}

i18n.injectLangContextTypes(SettingsArea);

export default SettingsArea;
