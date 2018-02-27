import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

import './AddForm.css';
import TextInput from 'components/TextInput';

class AddForm extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.formInputRef.focus();
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const cond = this.context.lang !== nextContext.lang;
        console.log(cond);
        return cond;
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

AddForm.contextTypes = {
    locale: PropTypes.func,
    lang: PropTypes.string
}

export default AddForm;
