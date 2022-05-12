import React from "react";

export class ClickCounter extends React.Component {
    state = {
        count: 0
    }
    setCounter = () => {
        this.setState(state => {
                return{
                    count: state.count + 1
                }
        })
    }
  render() {
    return (
      <div>
          <h1>count: {this.state.count}</h1>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            width: "150px",
            height: "60px",
            padding: "1rem",
            textAlign: "center",
          }}
          onClick={this.setCounter}>
          click
        </button>
        
      </div>
    );
  }
}
