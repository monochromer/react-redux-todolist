import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as todoActions from 'actions/todoActions';
import * as filterActions from 'actions/filterActions';
import { filterTodos } from 'reducers';

import ToDoList from 'components/ToDoList';

class ToDoListContainer extends Component {
    render() {
        const { todos, filter, state } = this.props;
        const filteredTodos = filterTodos(state, filter);

        return (
            <ToDoList
                todos={filteredTodos}
                todoActions={this.props.todoActions}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    state,
    // todos: state.todosIds.map(id => state.todosById[id]),
    filter: state.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    todoActions: bindActionCreators(todoActions, dispatch),
    filterActions: bindActionCreators(filterActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoListContainer);
