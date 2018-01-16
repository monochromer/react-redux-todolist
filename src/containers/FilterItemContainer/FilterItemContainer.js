import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import { filterChange } from 'actions/filterActions'
import { memoFilter, filterTodos } from 'reducers';

import FilterItem from 'components/FilterItem';

const mapStateToProps = (state, ownProps) => ({
    count: memoFilter(state, ownProps).length,
    isActive: ownProps.filter === state.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: () => dispatch(filterChange(ownProps.filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem);
