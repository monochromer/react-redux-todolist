import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk'
import rootReducer from 'reducers';
import API from 'API/todoAPI';
import { throttle } from 'utils';

const configureStore = () => {
    let initialState = API.get() || {};

    var store = createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        // applyMiddleware(thunk)
    );

    store.subscribe(throttle(() => API.save(store.getState()), 300));

    return store;
}

export default configureStore;
