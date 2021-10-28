import React from 'react';
import Navbar from '@components/Navbar';

class App extends React.Component {
  render() {
    return (
      <>
        <div class="container mx-auto">
          <Navbar />
          <div class="grid grid-cols-8">
            <div class="col-span-5">4</div>
            <div class="col-span-3">3</div>
          </div>
        </div>
        <div class="container px-36 mx-auto">
          <div class="grid grid-cols-8">
            <div class="col-span-5">5</div>
            <div class="col-span-3">3</div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
