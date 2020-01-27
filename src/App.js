import React, { Component } from 'react';
import Dashboard from "./views/Dashboard/Dashboard";

class App extends Component {
 
  render() {
    return (
      <Dashboard state={this.state}/>
    );
  }
}

export default App;