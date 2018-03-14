import React from 'react';
import PropTypes from 'prop-types';

import i18n from 'i18n';

import Control from 'components/Controls';
import './Todo.css';

const Todo = (props, context) => {
    const { locale } = context;
    return (
        <div className={'Todo' + (props.completed ? ' Todo--Completed' : '')}>
            <Control
                className='Todo-StatusIcon'
                value={props.status}
                type='checkbox'
                checked={props.completed}
                onChange={props.onChange}
            />
            <div className='Todo-Text'>{props.children}</div>
            <button className='Todo-Delete'
                title={locale('delete-todo')}
                type='button'
                onClick={props.onDelete}
            ></button>
        </div>
    );
};

i18n.injectLangContextTypes(Todo);

export default Todo;
