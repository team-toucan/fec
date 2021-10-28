import React from 'react';
import Button from '@components/Button';
import Img from '@components/Img';
import Heading from '@components/Headings';
import { getAllProducts } from './api/index.js';

// console.log('get all products ', getAllProducts.then(() => {}));
getAllProducts.then((response) => {
  console.log(response);
});

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <Heading />
        <h1 className="text-4xl text-black bg-red-50">Hello {name}</h1>
        <Img />
      </>
    );
  }
}

export default App;
