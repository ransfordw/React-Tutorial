import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi, I am a React App</h1>
        <p>This is really working!</p> 
        <Person name="John" age="28"/> 
        <Person name="Jane" age="22"/> 
        <Person name="Renault" age="53"/> 
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
