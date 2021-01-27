import React, { Component } from 'react';
import ToDoList from '../containers/ToDoList';
import AddTodoForm from '../containers/AddTodoForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo Box</h1>
        <AddTodoForm />
        <ToDoList />
      </div>
    );
  }
}

export default App;
