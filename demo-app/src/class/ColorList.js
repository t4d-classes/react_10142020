import React, { Component } from "react";

export class ColorList extends Component {
  render() {
    return (
      <ul>
        {this.props.colors.map((color) => (
          <li key={color.id}>
            {color.name} {color.hexcode}
          </li>
        ))}
      </ul>
    );
  }
}

ColorList.defaultProps = {
  colors: [],
};
