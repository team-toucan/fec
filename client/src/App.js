import React, { Component } from 'react';
import Navbar from '@components/Navbar';
import ProductShow from '@components/ProductShow';
import Products from '@components/Products';

import { Route, Link } from 'react-router-dom';
// Route is responsible for rendering the UI of a React component. It has a prop called path which always matches the current URL of the application. The second required prop is called element that tells the Route component when a current URL is encountered and which React component to be rendered. The element keyword here is also a new addition. Previously, with React Router v5, you would be using the prop called component.

// <Route path="/" element={<Home />} />

// Link:
// <a href="">Some Link Name</a>
// Using this approach in a React app is going to lead to refreshing a web page, each time a new view or page itself is rendered. This is not the advantage you are looking for when using a library like React. To avoid the refreshing of the web pages, the react-router-dom library provides the Link component.

class App extends React.Component {
  // Nesting routes is an important concept to understand. When routes are
  // nested, it is generally assumed that a certain part of a web page
  // remains constant and only the child part of the web page changes.
  render() {
    return (
      <div className="container mx-auto">
        <Navbar />
        <Route exact path="/" component={Products} />
        <Route exact path="/:id" component={ProductShow} />
      </div>
    );
  }
}

export default App;
