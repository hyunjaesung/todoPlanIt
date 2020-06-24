import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
// import { Provider } from 'react-redux';
// import store from './store';
import App from './App';

const Hot = hot(module)(App); // HOC

ReactDOM.render(<Hot />, document.querySelector('#root'));
