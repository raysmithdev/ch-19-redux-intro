import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { increment, decrement } from './actions/index'

import store from './store'

// dispatch
console.log(store.getState())
console.log(store.dispatch(increment(4)))
console.log(store.getState());



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
