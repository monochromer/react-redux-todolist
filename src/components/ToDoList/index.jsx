import React, { Component } from 'react';

import './ToDoList.css';
import Todo from 'components/Todo';

const ToDoListItem = (props) => {
    const { todo } = props;
    const onDelete = () => props.onDelete(todo.id);
    const onChange = () => props.onChange(todo.id);
    return (
        <li className='ToDoList-Item'>
            <Todo
                completed={todo.completed}
                status={todo.status}
                onDelete={onDelete}
                onChange={onChange}
            >
                {todo.text}
            </Todo>
        </li>
    )
};

class ToDoList extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        const deleteCallback = this.props.todoActions.deleteTodo;
        const changeCallback = this.props.todoActions.toggleTodo;

        const tasks = this.props.todos.map((todo) => {
            return (
                <ToDoListItem
                    key={todo.id}
                    todo={todo}
                    onDelete={deleteCallback}
                    onChange={changeCallback}
                />
            )
        });

        return (
            <ul className='ToDoList'>
                {tasks}
            </ul>
        )
    }
};

export default ToDoList;
