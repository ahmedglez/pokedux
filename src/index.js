import React from 'react';
import ReactDOM from 'react-dom/client';

import { pokemonsReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import {
	applyMiddleware,
	compose,
	legacy_createStore as createStore,
} from 'redux';
import { logger } from './middlewares';

import App from './App';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const composedEnhancer = compose(
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(logger)
);
const store = createStore(pokemonsReducer, composedEnhancer);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
