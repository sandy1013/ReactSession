import React, { Component } from 'react';
import './App.css';

import TodoEditor from './TodoList/TodoEditor/TodoEditor';

class App extends Component {
  // properties
  state = {
    todos: [
      {title: "Test Title 1", description: "Test Description 1"},
      {title: "Test Title 2", description: "Test Description 2"},
      {title: "Test Title 3", description: "Test Description 3"},
      {title: "Test Title 4", description: "Test Description 4"}
    ]
  };
  
  // functions
  testEvent = (name) => {
    console.log(name);
    this.setState({
      todos: [
        {title: "Test Title 11", description: "Test Description 11"},
        {title: "Test Title 2", description: "Test Description 2"},
        {title: "Test Title 3", description: "Test Description 3"},
        {title: "Test Title 4", description: "Test Description 4"}
      ]
    });
  }

  inputChange = (event) => {
    console.log(event);
    this.setState({
      todos: [
        {title: event.target.value, description: "Test Description 11"},
        {title: "Test Title 2", description: "Test Description 2"},
        {title: "Test Title 3", description: "Test Description 3"},
        {title: "Test Title 4", description: "Test Description 4"}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h3>Hi i am a React Application</h3>
        <TodoEditor click={this.testEvent} change={this.inputChange} title={this.state.todos[0].title} description={this.state.todos[0].description}>Sample Transclude</TodoEditor>
        <TodoEditor click={this.testEvent.bind(this, 'title bind')} change={this.inputChange} title={this.state.todos[1].title} description={this.state.todos[1].description}></TodoEditor>
        <TodoEditor change={this.inputChange} title={this.state.todos[2].title} description={this.state.todos[2].description}></TodoEditor>
        <TodoEditor change={this.inputChange} title={this.state.todos[3].title} description={this.state.todos[3].description}></TodoEditor>
        <br/>
        <button onClick={this.testEvent}>Test Event</button>
      </div>
    );
  }
}

export default App;
