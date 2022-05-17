import React from "react";
import { createRef } from "react";

export class UncontrolledLogin extends React.Component {
  _formRef = createRef();
  state = {
    buttonDisabled: false,
  };
  controlButton = () => {
    const name = this._formRef.current.elements.username.value;
    const password = this._formRef.current.elements.password.value;
    this.setState({
      buttonDisabled: !!name && !!password,
    });
  };
  controlValuesForm = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const remember = e.target.elements.remember.checked;

    console.log({
      username,
      password,
      remember,
    });
  };

  render() {
    return (
      <div>
        <form ref={this._formRef} onSubmit={this.controlValuesForm}>
          <input onChange={this.controlButton} type="text" name="username" />
          <input
            onChange={this.controlButton}
            type="password"
            name="password"
          />
          <input type="checkbox" name="remember" />
          <button disabled={!this.state.buttonDisabled} type="submit">
            submit
          </button>
          <button type="reset">reset</button>
        </form>
      </div>
    );
  }
}
