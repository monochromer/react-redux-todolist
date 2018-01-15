import React, {Component} from 'react';

import './AddForm.css';
import TextInput from 'components/TextInput';

class AddForm extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        }
    }

    onSubmitHandler = (e) => {
        var text = this.state.text.trim();
        if (text !== '') {
            this.props.onSubmit(text);
            this.setState({ text: '' });
        }
        e.preventDefault();
    }

    onChangeHandler = (e) => {
        this.setState({ text: e.target.value });
    }

    render() {
        return (
            <form
                className='AddForm'
                onSubmit={this.onSubmitHandler}
                ref={node => this.form = node}
            >
                <TextInput
                    isFull={true}
                    value={this.state.text}
                    onChange={this.onChangeHandler}
                    placeholder="Введите описание задачи..."
                />
            </form>
        );
    }
}

export default AddForm;
