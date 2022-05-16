import React from "react";
import clickTracker from "./click-tracker.css";
export class ClickTracker extends React.Component {
  state = {
    clicked: null,
  };
  getButtonClick = (e) => {
    this.setState({
      clicked: e.target.name,
    });
  };

  render() {
    return (
      <div>
        <div className="buttons">
          <button
            name="first"
            className="btn red"
            onClick={this.getButtonClick}
          >
            First button
          </button>
          <button
            name="second"
            className="btn blue"
            onClick={this.getButtonClick}
          >
            Second button
          </button>
          <button
            name="three"
            className="btn pink"
            onClick={this.getButtonClick}
          >
            Third button
          </button>
        </div>
        <h1>name: {this.state.clicked}</h1>
      </div>
    );
  }
}
