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
  handleReset = () => {
    this.setState({
      items: [],
    });
  };
  handleRemoveLi = (indexToRemove) => {
    this.setState((state) => {
      return {
        items: state.items.filter((item, index) => index !== indexToRemove),
      };
    });
  };
  render() {
    return (
      <div>
        {this.props.render(
          this.state.items,
          this.addPersons,
          this.handleRemoveLi,
          this.handleReset
        )}
      </div>
    );
  }
}
