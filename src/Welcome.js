import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  render() {
    return (
      <div className="Welcome">
        <p>Hello {this.props.name || "js"}!</p>
        {this.props.age > 18 ? <Age /> : "You are very young!"}
      </div>
    );
  }
}
