import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import AppNoHooks from './AppNoHooks';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<AppNoHooks />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
