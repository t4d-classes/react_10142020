import React, { Component } from "react";

// extending provides us stateful logic
// and because of the instance we will have
// life cycle methods
export class ColorForm extends Component {
  // state = {
  //   name: "",
  //   hexcode: "",
  // };

  constructor(props) {
    super(props);

    // set the state on the component
    // instance
    this.state = {
      name: "",
      hexcode: "",
    };

    // most people really have no idea what's going on here...
    this.change = this.change.bind(this);
    this.submitColor = this.submitColor.bind(this);
  }

  change(e) {
    // dive into the topic of the value of "this"
    this.setState({ [e.target.name]: e.target.value });
  }

  // is not valid JavaScript, but the arrow function means lexical scope,
  // so the reasoning goes that the function is defined in the lexical scope
  // of the class, so the value of this should always be the instance of that class
  // change = (e) => {
  //   // dive into the topic of the value of "this"
  //   this.setState({ name: e.target.value });
  // }

  submitColor() {
    this.props.onSubmitColor({ ...this.state });
    this.setState({
      name: "",
      hexcode: "",
    });
  }

  render() {
    console.log(this.state);

    return (
      <form>
        <div>
          <label htmlFor="color-name-input">Color Name:</label>
          <input
            type="text"
            id="color-name-input"
            name="name"
            value={this.state.name}
            onChange={this.change}
          />
        </div>
        <div>
          <label htmlFor="color-hexcode-input">Color Hexcode:</label>
          <input
            type="text"
            id="color-hexcode-input"
            name="hexcode"
            value={this.state.hexcode}
            onChange={this.change}
          />
        </div>
        <button type="button" onClick={this.submitColor}>
          {this.props.buttonText}
        </button>
      </form>
    );
  }
}

ColorForm.defaultProps = {
  buttonText: "Submit Color",
};
