import reportWebVitals from './reportWebVitals';
import store from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
// import { addPost, changePost } from './redux/state'

let rerenderTree = (state) => {

	ReactDOM.render(
		<React.StrictMode>
			<App state={store.getState()} addPost={store.addPost.bind(store)} changePost={store.changePost.bind(store)} />
		</React.StrictMode >,
		document.getElementById('root')
	);
}

rerenderTree(store.getState())
store.subscribe(rerenderTree)

reportWebVitals();
