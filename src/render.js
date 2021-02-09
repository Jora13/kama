import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { addPost, changePost } from './redux/store'

export let rerenderTree = (state) => {

   ReactDOM.render(
      <React.StrictMode>
         <App state={state} addPost={addPost} changePost={changePost} />
      </React.StrictMode >,
      document.getElementById('root')
   );
}