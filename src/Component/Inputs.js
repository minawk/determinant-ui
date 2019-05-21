import React, { Fragment } from "react";

export default ({ inputs }) => {
  return inputs.map((valueX, x) => {
    return valueX.map((valueY, y) => {
      const key = (x + "" + y).toString();
      const Br = y === inputs.length - 1 ? () => <br /> : () => null;
      return (
        <Fragment key={key}>
          <input
            onChange={e => this.props.handleChange(e, x, y)}
            value={inputs[x][y]}
            size="3"
            type="number"
          />
          <Br />
        </Fragment>
      );
    });
  });
};
