import React, { Component } from 'react';
import Hero from './components/Hero';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Main />
      </div>
    );
  }
}

export default App;
