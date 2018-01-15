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
            ref={props.inputRef}
        />
    );
}

export default TextInput;
