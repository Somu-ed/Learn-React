import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first react App!</h1>
        <p>Hello :)</p>
        <Ninjas name="Somu" age="21" belt="black" />
        <Ninjas name="Somu" age="21" belt="black" />
      </div>
    );
  }
}

export default App;
