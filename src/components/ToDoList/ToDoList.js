import React, { PureComponent, Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import FlipMove from 'react-flip-move';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

import i18n from 'i18n';

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

class ToDoListItem extends PureComponent {
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

class ToDoList extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.ps = new PerfectScrollbar(this.list);
    }

    componentDidUpdate() {
        // this.ps.update();
        setTimeout(() => { this.ps.update() }, 400);
    }

    componentWillUnmount() {
        this.ps.destroy();
    }

    getListRef = node => this.list = node;

    render() {
        const deleteCallback = this.props.todoActions.deleteTodo;
        const changeCallback = this.props.todoActions.toggleTodo;
        const todos = this.props.todos;

        const tasks = (todos.length > 0)
            ? todos.map((todo) => {
                return (
                    <ToDoListItem
                        key={todo.id}
                        todo={todo}
                        onDelete={deleteCallback}
                        onChange={changeCallback}
                    />
                )
            })
            : (
                <div className='ToDoList-Empty'>
                    {this.context.locale('empty-list')}
                </div>
            );

        return (
            <div ref={this.getListRef} className='ToDoList'>
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

i18n.injectLangContextTypes(ToDoList);

export default ToDoList;
