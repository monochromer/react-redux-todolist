import React from 'react';
import {Provider} from 'react-redux';

import 'normalize.css/normalize.css';
import ToDoListApp from 'containers/ToDoListApp';

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <ToDoListApp />
        </Provider>
    );
}

export default Root;
