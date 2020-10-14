import React, { Component } from "react";

import { ColorList } from "./ColorList";
import { ColorForm } from "./ColorForm";

export class ColorTool extends Component {
  state = { colors: [] };

  addColor = (color) => {
    this.setState({
      colors: [
        ...this.state.colors,
        {
          ...color,
          id: Math.max(...this.state.colors.map((c) => c.id), 0) + 1,
        },
      ],
    });
  };

  render() {
    return (
      <>
        <ColorList colors={this.state.colors} />
        <ColorForm buttonText="Add Color" onSubmitColor={this.addColor} />
      </>
    );
  }
}
