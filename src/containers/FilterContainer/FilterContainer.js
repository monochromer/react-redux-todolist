import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import { filterTodos } from 'reducers';
import * as filterActions from 'actions/filterActions'

import Filter from 'components/Filter';

class FilterContainer extends Component {
    render() {
        const { state } = this.props;
        return (
            <Filter
                filters={[
                    {
                        status: 'ALL',
                        text: 'Все',
                        count: filterTodos(state, 'ALL').length
                    },
                    {
                        status: 'COMPLETED',
                        text: 'Завершенные',
                        count: filterTodos(state, 'COMPLETED').length
                    },
                    {
                        status: 'ACTIVE',
                        text: 'В процессе',
                        count: filterTodos(state, 'ACTIVE').length
                    }
                ]}
                currentFilter={this.props.filter}
                filterActions={this.props.filterActions}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    state,
    // todos: state.todosIds.map(id => state.todosById[id]),
    filter: state.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    filterActions: bindActionCreators(filterActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
