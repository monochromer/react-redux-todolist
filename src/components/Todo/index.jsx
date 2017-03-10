import React from 'react';
import { Control } from 'components/Controls';
import './Todo.css';

const Todo = (props) => {
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
                title="Delete Todo"
                type='button'
                onClick={props.onDelete}
            ></button>
        </div>
    );
};

export default Todo;
