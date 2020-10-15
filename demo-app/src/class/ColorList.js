import React, { Component } from "react";

export class ColorList extends Component {
  render() {
    return (
      <ul>
        {this.props.colors.map((color) => (
          <li key={color.id}>
            {color.name} {color.hexcode}
            <button
              type="button"
              onClick={() => this.props.onArchive(color.id)}
            >
              Archive
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ColorList.defaultProps = {
  colors: [],
};
