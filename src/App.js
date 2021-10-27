import React from 'react';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1 className="text-4xl text-black bg-red-50">Hello {name}</h1>
      </>
    );
  }
}

export default App;
