import React from 'react'

export default class Todo extends React.Component {
  
  handleClick = () => {
    this.props.completeItem(this.props.todo.id)
  }
  
  
  render() {
    return (
      <div className={`todo${this.props.todo.completed ? " done" : ""}`} onClick={this.handleClick}>
        {this.props.todo.name} {this.props.todo.completed && "✓"}
      </div>
    )
  }
}


