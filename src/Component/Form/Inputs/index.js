import React, { Component, Fragment } from 'react';

class InputsComponent extends Component {
  render = () => {
    const length = this.props.inputs.length;
    return this.props.inputs.map((valueX, x) => {
      return valueX.map((valueY, y) => {
        const key = (x + '' + y).toString();
        const Br = (y === (length - 1)) ? () => <br/> : () => null;
        return (
          <Fragment key={key}>
            <input
              onChange={(e) => {this.props.handleChange(e, x, y)}}
              value={this.props.inputs[x][y]}
              size="3"
              type="number" />
            <Br/>
          </Fragment>
        )
      })
    })
  }
}

export default InputsComponent;
