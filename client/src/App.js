import React, { Component } from "react";
import io from 'socket.io-client'

class App extends Component {

  componentDidMount() {
    const socket = io.connect('/')
  }

  return() {
    <div>123
    </div>
  };
}
export default App;
