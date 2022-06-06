import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <input type="text" name="name" />
        <button>Submit</button>
        <button>Hide Completed</button>
      </form>
    )
  }
}
