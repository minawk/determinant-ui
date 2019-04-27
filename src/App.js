import React, { Component } from 'react';
import Form from './Component/Form'
import './App.css';

class App extends Component {
  state = {
    dimension: 2,
  }

  handleDimension = (e) => {
    const dimension = e.target.value;
    if (dimension > 1 && dimension < 9) {
      this.setState({ dimension })
    }
  }

  render() {
    return (
      <div className="App">
        <label for="select">Dimension: </label>
        <input type="number" value={this.state.dimension} onChange={this.handleDimension}/>
        <Form dimension={this.state.dimension}/>
      </div>
    );
  }
}

export default App;
