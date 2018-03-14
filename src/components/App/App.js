import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import i18n from 'i18n';

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

i18n.injectLangContextTypes(App);

export default App;
