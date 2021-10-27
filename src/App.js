
import React from "react";
import { hot } from 'react-hot-loader/root';
import Button from './components/Button'

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1 className="text-4xl text-white bg-black">
          <Button />
          Hello {name}
        </h1>
      </>
    );
  }
}

export default hot(App);
