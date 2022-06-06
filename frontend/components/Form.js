import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    }
  }
  
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({...this.state, [name]: value })
  }

  handleSubmit = evt => {
    evt.preventDefault();
    if(!this.state.text.trim()) {
      return;
    }
    this.props.addItem(this.state.text)
    this.setState({ text: "" })
  }

  // handleHide = evt => {
  //   evt.preventDefault();
  //   this.props.hideCompleted();
  // }
  
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
    )
  }
}
