import React from 'react';
import ReactDOM from 'react-dom';
import Todolist2 from './Todolist2';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Todolist2 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
