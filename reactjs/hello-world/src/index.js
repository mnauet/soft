import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import App from './App';
import AppCat from "./AppCat"
import AppJoke from './AppJoke'
import AppInfo from './AppInfo'
import AppProducts from './AppProducts'
import AppClass1 from './components/class1/App'

import * as serviceWorker from './serviceWorker';
import AppTodoItem from './components/todoItem/AppTodoItem';
import AppTodoItemClass from './components/todoItem/AppTodoItemClass';
import AppCount from './components/count/AppCount'


import AppState from './AppState'



ReactDOM.render(<AppTodoItemClass />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
