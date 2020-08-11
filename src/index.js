import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import catsReducer from 'src/reducers/catsReducer.js'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

store = createStore(catsReducer, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
);
