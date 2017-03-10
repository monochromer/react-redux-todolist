import React from 'react';
import './TextInput.css';

const TextInput = (props) => {
    return (
        <input
            className={'TextInput' + (props.isFull ? ' TextInput--Full' : '')}
            type='text'
            value={props.value}
            name={props.name}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    );
}

TextInput.propTypes = {
    isFull: React.PropTypes.bool,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    name: React.PropTypes.string
};

export default TextInput;
