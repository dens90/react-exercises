import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { increment,decrement, reset } from "./reducers/counterReducer";
import { add, remove, edit } from "./reducers/TodosReducer";
import { stateTodos } from "./reducers/TodosReducer";
// import { stateCounter } from "./reducers/counterReducer";
import { nanoid } from "nanoid";
const App = () => {
  const [name, setName] = useState([]);

  //  const counter = useSelector( stateCounter)
  const todos = useSelector(stateTodos);

  const dispatch = useDispatch();
  const obj = {
    id: nanoid(),
    title: "pippo",
    completed: false,
  };
  return (
    <div>
      {/* <h1>{counter}</h1>
     <button onClick={() => dispatch(increment(1))}>Increment</button>
     <button onClick={() => dispatch(decrement(1))}>Decrement</button>
     <button onClick={() => dispatch(reset())}>Reset</button>*/}
      <div>
        <input
          type="text"
          name="todo"
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(
              add({
                id: nanoid(),
                title: name,
                completed: true,
              })
            )
          }
        >
          add
        </button>
        {todos &&
          todos.map((todo) => {
            return (
              <div key={todo.id}>
                <li key={todo.id}>{todo.title}</li>
                <button onClick={() => dispatch(remove(todo))}> remove</button>
                {/* {console.log(name)} */}
                <button
                  onClick={() => dispatch(edit({ id: todo.id, data: "pippo" }))}
                >
                  edit
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
