import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first react App!</h1>
        <p>Hello :)</p>
        <Ninjas/>
      </div>
    );
  }
}

export default App;
