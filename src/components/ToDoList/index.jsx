import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FlipMove from 'react-flip-move';
import Ps from 'perfect-scrollbar';
import 'perfect-scrollbar/dist/css/perfect-scrollbar.css';

import './ToDoList.css';
import Todo from 'components/Todo';

/*class AnimateableList extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillReceiveProps() {
        this.props.children.forEach(child => {
            const ref = this.refs[child.key];
            const domNode = ReactDOM.findDOMNode( ref );
            const boundingBox = domNode.getBoundingClientRect();
            this.setState({
                [child.key]: boundingBox
            });
        });
    }

    componentDidUpdate(previousProps) {
        previousProps.children.forEach( child => {
            let domNode = ReactDOM.findDOMNode( this.refs[child.key] );

            const newBox = domNode.getBoundingClientRect();
            const oldBox = this.state[key];
            
            const deltaX = oldBox.left - newBox.left; 
            const deltaY = oldBox.top  - newBox.top;

            requestAnimationFrame( () => {
                domNode.style.transform  = `translate(${deltaX}px, ${deltaY}px)`;
                domNode.style.transition = 'transform 0s';
                domNode.style.transition = '';
                
                requestAnimationFrame( () => {
                    domNode.style.transform  = '';
                    domNode.style.transition = 'transform 500ms';
                });
            });
        });
    }

    render() {
        return (
            <div className='ToDoList'>
                {this.props.children}
            </div>
        );
    }
}*/

/*const ToDoListItem = (props) => {
    const { todo } = props;
    const onDelete = () => props.onDelete(todo.id);
    const onChange = () => props.onChange(todo.id);
    return (
        <div className='ToDoList-Item'>
            <Todo
                completed={todo.completed}
                status={todo.status}
                onDelete={onDelete}
                onChange={onChange}
            >
                {todo.text}
            </Todo>
        </div>
    )
};*/

class ToDoListItem extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        const props = this.props;
        const { todo } = props;
        const onDelete = () => props.onDelete(todo.id);
        const onChange = () => props.onChange(todo.id);
        return (
            <div className='ToDoList-Item'>
                <Todo
                    completed={todo.completed}
                    status={todo.status}
                    onDelete={onDelete}
                    onChange={onChange}
                >
                    {todo.text}
                </Todo>
            </div>
        )
    }
};

class ToDoList extends Component {
    constructor(props, context) {
        super(props, context)
    }
    
    componentDidMount() {
        Ps.initialize(this.list);
    }

    componentDidUpdate() {
        setTimeout(() => { Ps.update(this.list) }, 400);
    }

    componentWillUnmount() {
        Ps.destroy(this.list);
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
            <div ref={node => this.list = node} className='ToDoList'>
                <FlipMove
                    duration={400}
                    easing='ease-out'
                    enterAnimation="fade"
                    leaveAnimation="fade"
                >
                    {tasks}
                </FlipMove>
            </div>
        )
    }
};

export default ToDoList;
