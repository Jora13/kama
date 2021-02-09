import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';

let rerenderTree = (state) => {

	ReactDOM.render(
		<React.StrictMode>
			<App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
		</React.StrictMode >,
		document.getElementById('root')
	);
}

rerenderTree(store.getState())
store.subscribe(rerenderTree)


reportWebVitals();
