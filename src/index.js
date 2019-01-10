import '@babel/polyfill';
import React from 'react';
import {render} from 'react-dom';

import Root from 'containers/Root';
import configureStore from 'store';

const store = configureStore();

render(
    <Root store={store} />,
    document.getElementById('mount-point')
);

(function() {
    const serviceWorker = navigator.serviceWorker;
    if (!serviceWorker) return;

    function onRegisterSuccess(registration) {
        registration.onupdatefound = function() {
            registration.installing.onstatechange = function() {
                console.log('state: ', this.state);
            }
        }
    }

    function onRegisterError(error) {
        console.error(error);
    }

    window.addEventListener('load', function() {
        serviceWorker
            .register('sw.js')
            .then(onRegisterSuccess)
            .catch(onRegisterError);
    });
})();
