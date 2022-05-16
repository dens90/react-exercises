import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
  state = {
    value: "",
  };
  getCurrentValue = (e) => {
    console.log(e);

    this.setState({
      value: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.getCurrentValue} />
        <Welcome name={this.state.value} />
      </div>
    );
  }
}
