import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'John', age: 28 },
      { name: 'Jane', age: 22 },
      { name: 'Renault', age: 53 }
    ],
    otherState: 'Some other value'
  };

  //name ends with handler because it is an event handler
  switchNameHandler = () => {
    //console.log('Was clicked');
   //DON'T do this this.state.persons[0].name = 'John Smith';s
   this.setState({
    persons: [
      { name: 'John Smith', age: 28 },
      { name: 'Jane', age: 22 },
      { name: 'Renault', age: 55 }
    ]
   })
  }

  render() {
    return (
      <div className="App">
        <h1> Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My Hobbies: Fishing</Person>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
