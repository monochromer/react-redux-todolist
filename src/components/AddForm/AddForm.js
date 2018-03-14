import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

import i18n from 'i18n';

import './AddForm.css';
import TextInput from 'components/TextInput';

class AddForm extends Component {
    componentDidMount() {
        this.formInputRef.focus();
    }

    getInputRef = c => this.formInputRef = c;

    onSubmitHandler = (e) => {
        var text = this.formInputRef.value.trim();
        if (text !== '') {
            this.props.onSubmit(text);
            this.formInputRef.value = '';
        }
        e.preventDefault();
    }

    render() {
        const { locale: l } = this.context;
        return (
            <form
                className='AddForm'
                onSubmit={this.onSubmitHandler}
            >
                <TextInput
                    className='AddForm-Input'
                    inputRef={this.getInputRef}
                    isFull={true}
                    placeholder={l('create-placeholder')}
                />
                <button
                    className='AddForm-Button'
                    type='submit'
                >
                    {l('create')}
                </button>
            </form>
        );
    }
};

i18n.injectLangContextTypes(AddForm);

export default AddForm;
