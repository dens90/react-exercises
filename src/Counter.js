import React from "react";

export class Counter extends React.Component {
  state = {
    count: this.initialValue ?? 0,
  };

  constructor(props) {
    super(props);
    setInterval(() => {
// CONTINUA A LAVORARE DA QUI
      this.setState((state) => {    
        return {
          count: state.count + (this.incrementBy ?? 1),
        };
      });
    }, this.updateByInterval ?? 1000);
  }

  render() {
    return <h1>Count: {this.state.count}</h1>;
  }
}
