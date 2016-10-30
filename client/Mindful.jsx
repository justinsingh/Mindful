import React from 'react';
import { render } from 'react-dom';
import css from './styleSheet/styles.css';

// import components
import App from './components/App.jsx';
import Home from './components/Home.jsx';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store.js';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
