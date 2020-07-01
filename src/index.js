import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/';
import thunk from 'redux-thunk';


const store = createStore(
	rootReducer,
  compose(applyMiddleware(thunk),       window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
);


ReactDOM.render(
	<Provider store={store}>

		<App />
	</Provider>
	, document.getElementById('root'));
