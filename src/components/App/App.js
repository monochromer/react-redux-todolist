import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import './App.css';

import AddFormContainer from 'containers/AddFormContainer';
import FilterPanel from 'components/FilterPanel';
import ToDoListContainer from 'containers/ToDoListContainer';
import SettignsArea from 'components/SettingsArea';

const App = (props, context) => {
    return (
        <div className="ToDoApp">
            <Helmet htmlAttributes={{ lang: context.lang }}></Helmet>
            <SettignsArea />
            <AddFormContainer />
            <FilterPanel />
            <ToDoListContainer />
        </div>
    )
};

App.contextTypes = {
    lang: PropTypes.string
};

export default App;
