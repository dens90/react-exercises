import { render } from "@testing-library/react";
import React from "react";

export class TodoList extends React.Component {
  state = {
    items: ["gianni"],
  };

  addPersons = (e) => {
    e.preventDefault();
    const inputTodo = e.target.elements.input;
    const todo = e.target.elements.input.value;
    inputTodo.value = "";
    this.setState((state) => {
      return {
        items: [...state.items, todo],
      };
    });
  };
  handleReset = e => {
    this.setState({
        items: []
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addPersons}>
          <input name="input" type="text" />
          <button type="submit">add</button>
        </form>
        <button name="reset" onClick={this.handleReset}>reset</button>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
