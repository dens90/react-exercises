import React from "react";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue ?? 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + (this.props.incrementBy ?? 1),
        };
      });
    }, this.props.updateByInterval ?? 1000);
  }
  render() {
    return <h1>Count: {this.state.count}</h1>;
  }
}
