import React from 'react';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import App from 'components/App';
import i18n from '../../i18n';

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <i18n.Provider>
                <App />
            </i18n.Provider>
        </Provider>
    );
}

export default Root;
