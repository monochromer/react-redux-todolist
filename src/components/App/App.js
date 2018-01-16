import React from 'react';

import './App.css';

import AddFormContainer from 'containers/AddFormContainer';
import FilterPanel from 'components/FilterPanel';
import ToDoListContainer from 'containers/ToDoListContainer';

const App = () => {
    return (
        <div className="ToDoApp">
            <AddFormContainer />
            <FilterPanel />
            <ToDoListContainer />
        </div>
    )
};

export default App;
