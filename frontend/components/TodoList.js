import React from 'react';
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.todos.map(todo => {
            console.log(todo.id);
            return <Todo
                      todo={todo}
                      key={todo.id}
                      completeItem={this.props.completeItem}
                    />
          })
        }
      </div>
    )
  }
}
