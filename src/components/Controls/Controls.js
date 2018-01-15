import React, { Component } from 'react';
import cx from 'classnames';
import './Controls.css';

const Control = (props) => {
    const content = !!props.children ? props.children : props.text;
    const contentElement = content
        ? <span className='Control-Text'>{content}</span>
        : null;

    return (
        <label className={cx({
            'Control': true,
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

export default Control;
