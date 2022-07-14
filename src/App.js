import './App.css';

import React, { Component } from 'react';

class App extends Component {
  c='Surya';

  render() {
    return (
      <div>
        <h1>hello my first class based components {this.c}</h1>
      </div>
    );
  }
}

export default App;