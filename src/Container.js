import React from "react";
import "./container.css";
export class Container extends React.Component {
  render() {
    return <div className="container">{this.props.children}</div>;
  }
}
