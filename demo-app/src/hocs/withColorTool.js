import React, { Component } from "react";

export const withColorTool = (PresentationalComponent) => {
  return class ColorToolContainer extends Component {
    state = { colors: [], showArchive: false };

    componentDidMount() {
      const that = this;

      fetch("http://localhost:3060/colors")
        .then(function resJSON(res) {
          return res.json();
        })
        .then(function updateColor(colors) {
          that.setState({ colors });
        });
    }

    addColor = (color) => {
      this.setState({
        colors: [
          ...this.state.colors,
          {
            ...color,
            archive: false,
            id: Math.max(...this.state.colors.map((c) => c.id), 0) + 1,
          },
        ],
      });
    };

    toggleShowArchive = () => {
      this.setState({
        showArchive: !this.state.showArchive,
      });
    };

    archiveColor = (colorId) => {
      const colorIndex = this.state.colors.findIndex((c) => c.id === colorId);
      const newColors = [...this.state.colors];
      newColors[colorIndex] = { ...newColors[colorIndex], archive: true };
      this.setState({ colors: newColors });
    };

    render() {
      return (
        <PresentationalComponent
          colors={this.state.colors.filter(
            (c) => !c.archive || this.state.showArchive
          )}
          onAddColor={this.addColor}
          showArchive={this.state.showArchive}
          onArchiveColor={this.archiveColor}
          onToggleShowArchive={this.toggleShowArchive}
        />
      );
    }
  };
};
