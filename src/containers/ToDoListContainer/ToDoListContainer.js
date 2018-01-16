import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as todoActions from 'actions/todoActions';
import { memoTodos, filterTodos } from 'reducers';

import ToDoList from 'components/ToDoList';

class ToDoListContainer extends Component {
    render() {
        const { todos, todoActions } = this.props;
        return (
            <ToDoList
                todos={todos}
                todoActions={todoActions}
            />
        )
    }
};

const mapStateToProps = (state, ownProps) => ({
    todos: memoTodos(state, ownProps)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    todoActions: bindActionCreators(todoActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoListContainer);
