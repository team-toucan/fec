import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// This is the first component to import from the react-router-dom library. It is used to wrap different routes. It uses the HTML5 history API to keep track of routes history in the React app.
import { BrowserRouter as Router } from 'react-router-dom';
import './styles.css';

ReactDOM.render(
  //   The Router part in the above snippet is the alias that makes it easier to write. It is recommended to import and use it at the top level component in a React app’s component hierarchy:
  <Router>
    <App name="Jane" />
  </Router>,
  document.getElementById('app')
);
