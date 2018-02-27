import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from 'actions/todoActions';
import AddForm from 'components/AddForm';

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSubmit: text => dispatch(addTodo(text))
})

export default connect(
    null,
    mapDispatchToProps,
    // null,
    // { pure: false }
)(AddForm);
