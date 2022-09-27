import React, { Component } from "react";
import io from 'socket.io-client'

class App extends Component {

  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    const socket = io.connect('/')
    socket.on('msg', (data) => {
      // this.setState({ msg: data })
      console.log(data)
    })
  }

  render() {
    return (
      <div>
        <h1>msg: {this.state}</h1>
      </div>
    )

  }
}

export default App;
