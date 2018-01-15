import React from 'react';

import './App.css';

import AddFormContainer from 'containers/AddFormContainer';
import FilterContainer from 'containers/FilterContainer';
import ToDoListContainer from 'containers/ToDoListContainer';

const App = () => {
    return (
        <div className="ToDoApp">
            <AddFormContainer />
            <FilterContainer/>
            <ToDoListContainer/>
        </div>
    )
};

export default App;
