import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from 'actions/todoActions';
import AddForm from 'components/AddForm';

class AddFormContainer extends React.Component {
    render() {
        return <AddForm onSubmit={this.props.addTodo} />
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    addTodo: text => dispatch(addTodo(text))
})

export default connect(null, mapDispatchToProps)(AddFormContainer);
