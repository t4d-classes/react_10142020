import React, { Component } from "react";

import { ColorList } from "./ColorList";
import { ColorForm } from "./ColorForm";

import { withColorTool } from "../hocs/withColorTool";

class BaseColorTool extends Component {
  render() {
    return (
      <>
        <div>
          <input
            type="checkbox"
            checked={this.props.showArchive}
            onChange={this.props.onToggleShowArchive}
          />
          Show Archive
        </div>
        <ColorList
          colors={this.props.colors}
          onArchive={this.props.onArchiveColor}
        />
        <ColorForm
          buttonText="Add Color"
          onSubmitColor={this.props.onAddColor}
        />
      </>
    );
  }
}

export const ColorTool = withColorTool(BaseColorTool);
