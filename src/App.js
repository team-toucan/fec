import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Navbar from '@components/Navbar';
import ProductShow from '@components/ProductShow';

import RelatedItems from '@components/RelatedItems';

import { getAllProducts } from './api';

class App extends React.Component {
  state = {
    products: [],
  };
  componentDidMount() {
    getAllProducts().then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }
  render() {
    console.log(this.state);
    return (
      <>
        <div class="container mx-auto">
          {/* <Navbar /> */}

          <nav>
            <ul>
              <li>
                <Link to="/products">products</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>


          <Switch>
            <Route path="/products/:id">
              <ProductShow />
            </Route>
          </Switch>
          {/* <div class="grid grid-cols-8">
            <div class="col-span-5">4</div>
            <div class="col-span-3">3</div>
          </div>
        </div>
        <div class="container px-36 mx-auto">
          <div class="grid grid-cols-8">
            <div class="col-span-5">5</div>
            <div class="col-span-3">3</div>
          </div> */}
        </div>
      </>
    );
  }
}

export default App;
