import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { startGetUser } from './actions/user'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';

import configureStore from './store/configureStore'
const store = configureStore()

console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState())
})

// handle page reloads
if(localStorage.getItem('token')) {
    store.dispatch(startGetUser())
}

const ele = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(ele, document.getElementById('root'));
