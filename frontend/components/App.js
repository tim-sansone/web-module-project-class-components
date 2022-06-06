import React from 'react';
import { nanoid } from "nanoid"
import TodoList from "./TodoList";
import Form from "./Form";


const todos = [
  {
    name: 'Organize Garage',
    id: nanoid(),
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: nanoid(),
    completed: false
  }
]



export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos,
      hideCompleted: false
    }
  }

  addItem = (text) => {
    const newItem = {
      name: text,
      id: nanoid(),
      completed: false
    }

    this.setState({ todos: [...this.state.todos, newItem] })
  }

  completeItem = (id) => {
    this.setState({ 
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          return {...todo, completed: !todo.completed}
        }
        return todo;
      })
     })
  }

  // hideCompleted = () => {
  //   this.setState({
  //     todos: this.state.todos.filter(todo => !todo.completed)
  //   })
  // }

  toggleHideCompleted = () => {
    this.setState({
      ...this.state,
      hideCompleted: !this.state.hideCompleted,
    })
  }

  clearAll = () => {
    this.setState({
      ...this.state,
      todos: []
    })
  }
  
  
  
  render() {
    return (
      <div>
        <h2>Todos</h2>
        <TodoList
          todos={this.state.todos}
          hideCompleted={this.state.hideCompleted}
          completeItem={this.completeItem}
        />
        <Form addItem={this.addItem} />
        <button onClick={this.toggleHideCompleted}>{this.state.hideCompleted ? "Show Completed" : "Hide Completed"}</button>
        <button onClick={this.clearAll}>Clear All</button>
      </div>
    )
  }
}

// hideCompleted={this.hideCompleted}
