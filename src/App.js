import React from "react";
import { Container } from "./Container";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { CounterDisplay } from "./CounterDisplay";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { TodoList } from "./TodoList";
import { Uncontrolled, UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Hello name={<strong>React</strong>} />
          <Welcome name="john" age={16} />
          <Counter />
          <CounterDisplay />
          <ClickCounter />
          <ClickTracker />
          <InteractiveWelcome />
          <Login />
          <UncontrolledLogin />
          <TodoList />
        </Container>
      </div>
    );
  }
}
