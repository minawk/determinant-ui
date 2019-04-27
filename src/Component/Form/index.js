import React, { Component, Fragment } from 'react';
import Inputs from './Inputs';
import Matrix from '../../api/Matrix';

class FormComponent extends Component {
  constructor(props) {
    super(props);
    const inputs = this.initInputs(() => 0);
    this.state = { inputs, determinant: 0 };
  }

  initInputs = (initiation) => {
    let inputs = [];
    for (let x = 0; x < this.props.dimension; x++) {
      inputs.push([]);
      for (let y = 0; y < this.props.dimension; y++) {
        inputs[x][y] = initiation();
      }
    }
    return inputs;
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if (oldProps.dimension !== newProps.dimension) {
      const inputs = this.initInputs(() => 0);
      this.setState({inputs}, () => {
        this.updateDeterminant();
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.updateDeterminant();
  }

  updateDeterminant = () => {
    const determinant = new Matrix(this.state.inputs).determinant();
    this.setState({determinant});
  }

  handleInput = (e, x, y) => {
    let inputs = this.state.inputs;
    inputs[x][y] = e.target.value;
    this.setState({inputs});
  }

  handleRandom = (e) => {
    e.preventDefault(); // to prevent submit
    const Random = () => {
      const forSign = Math.round(Math.random());
      const sign = forSign ? 1 : -1;
      return Math.floor(Math.random() * 10) * sign;
    };
    const inputs = this.initInputs(Random);
    this.setState({inputs});
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <Inputs
            inputs={this.state.inputs}
            handleChange={this.handleInput} />
          <br />
          <button onClick={this.handleRandom}>Random</button>
          <button type="submit">Submit</button>
        </form>
        <div>Determinant = {this.state.determinant}</div>
      </Fragment>
    );
  }
}

export default FormComponent;
