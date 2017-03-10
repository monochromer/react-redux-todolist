import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as todoActions from 'actions/todoActions';
import * as filterActions from 'actions/filterActions';
import { filterTodos } from 'reducers';

import './ToDoListApp.css';

import AddForm from 'components/AddForm';
import Filter from 'components/Filter';
import ToDoList from 'components/ToDoList';

class ToDoApp extends Component {
    static PropTypes = {
        todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
        filter: React.PropTypes.string,
        todoActions: React.PropTypes.object.isRequired
    }

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { addTodo } = this.props.todoActions;
        const filteredTodos = filterTodos(this.props.todos, this.props.filter);

        return (
            <div className="ToDoApp">
                <AddForm onSubmit={addTodo} />
                <Filter
                    filters={[
                        {status: 'all',       text: 'Все', count: filterTodos(this.props.todos, "all").length},
                        {status: 'completed', text: 'Завершенные', count: filterTodos(this.props.todos, "completed").length},
                        {status: 'active',    text: 'В процессе', count: filterTodos(this.props.todos, "active").length}
                    ]}
                    currentFilter={this.props.filter}
                    filterActions={this.props.filterActions}
                />
                <ToDoList
                    todos={filteredTodos}
                    todoActions={this.props.todoActions}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    todos: state.todos,
    filter: state.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    todoActions: bindActionCreators(todoActions, dispatch),
    filterActions: bindActionCreators(filterActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoApp);
