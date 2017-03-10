import React, { Component } from 'react';
import classnames from 'classnames';
import './Controls.css';

const cx = classnames;

export const Control = (props) => {
    const content = !!props.children ? props.children : props.text;
    const contentElement = content ? (
        <span className='Control-Text'>
            {!!props.children ? props.children : props.text}
        </span>
    ): null;

    return (
        <label className={cx({
            Control,
            [`Control--Type-${props.type}`]: !!props.type,
            [props.className]: !!props.className
        })}>
            <input
                className='Control-Input'
                type={props.type}
                name={props.name}
                value={props.value}
                checked={(typeof props.checked !== undefined ? props.checked : false)}
                onChange={props.onChange}
            />
            <span className='Control-Icon'></span>
            {contentElement}
        </label>
    )
}

Control.propTypes = {
    type: React.PropTypes.oneOf(['radio', 'checkbox']).isRequired,
    name: React.PropTypes.string,
    checked: React.PropTypes.bool,
    text: React.PropTypes.string,
    onChange: React.PropTypes.func
}
