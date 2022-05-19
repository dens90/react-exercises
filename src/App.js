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
        <Container title={<h1>Il mio contenitore</h1>}>
          <Hello name={<strong>React</strong>} />
          <Welcome name="john" age={16} />
          <Counter />
          <CounterDisplay />
          <ClickCounter />
          <ClickTracker />
          <InteractiveWelcome />
          <Login />
          <UncontrolledLogin />
          <TodoList
            render={(items, addPerson, removeLi, reset) => {
              return (
                <div>
                  <h1>Render Props</h1>
                  <form onSubmit={addPerson}>
                    <input type="text" name="input" />
                    <button type="submit">add</button>
                  </form>
                  <button onClick={reset}>reset</button>
                  <ul>
                    {items.map((item, i) => {
                      return (
                        <div>
                          <li key={i}>{item}</li>
                          <button onClick={() => removeLi(i)}>remove</button>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              );
            }}
          ></TodoList>
        </Container>
      </div>
    );
  }
}
