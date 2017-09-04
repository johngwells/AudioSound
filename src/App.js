import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AudioSound from './components/AudioSound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Audio Sound</h2>
        </div>
        <div>
          <p>Turn down your volume before switching sounds!!</p>
        <AudioSound />
        </div>
      </div>
    );
  }
}

export default App;
