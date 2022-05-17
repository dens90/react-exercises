import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
    button: false,
  };
  controlValue = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const checked = e.target.value;
    this.setState({
      [name]: value,
      checked: value,
      button: true,
    });
    console.log(e);
  };

  controlCheck = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;
    this.setState({
      remember: checked,
    });
  };
  onLogin = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
      button: true,
    });
  };
  resetStatus = () => {
    this.setState({
      username: "",
      password: "",
      remember: false,
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.controlValue}
          name="username"
          value={this.state.username}
        />
        <input
          type="password"
          name="password"
          onChange={this.controlValue}
          value={this.state.password}
        />
        <input
          type="checkbox"
          name="remember"
          checked={this.state.remember}
          onClick={this.controlCheck}
        />
        <button
          onClick={this.onLogin}
          value={
            this.state.button
              ? this.state.password.length >= 5 &&
                this.state.username.length >= 5
              : false
          }
        >
          Submit
        </button>
        <button onClick={this.resetStatus}>reset</button>
      </div>
    );
  }
}
