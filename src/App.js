import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentA from './components/ComponentA';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ComponentA txt=""/>
      </div>
    );
  }
}

export default App;
