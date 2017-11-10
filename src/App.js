import React, { Component } from 'react';
import Projects from './Component/Projects';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        My App
        <Projects test="Hello world"/>
      </div>
    );
  }
}

export default App;
