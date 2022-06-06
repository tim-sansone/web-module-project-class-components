import React from 'react';
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.todos.map(todo => {
            if(this.props.hideCompleted){
              if(!todo.completed) {
                return <Todo
                      todo={todo}
                      key={todo.id}
                      completeItem={this.props.completeItem}
                    />
              }
            }
            else {
              return <Todo
                      todo={todo}
                      key={todo.id}
                      completeItem={this.props.completeItem}
                    />
            }
          })
        }
      </div>
    )
  }
}
