import React, { PureComponent } from 'react';

import './AddForm.css';
import TextInput from 'components/TextInput';

class AddForm extends PureComponent {
    constructor() {
        super();
    }

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
        return (
            <form
                className='AddForm'
                onSubmit={this.onSubmitHandler}
            >
                <TextInput
                    className='AddForm-Input'
                    inputRef={this.getInputRef}
                    isFull={true}
                    placeholder="Введите описание задачи..."
                />
                <button className='AddForm-Button' type='submit'>Создать</button>
            </form>
        );
    }
}

export default AddForm;
