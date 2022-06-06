import { useSelector, useDispatch } from "react-redux";
import { add, remove, edit } from "./reducers/TodosReducer";
import { stateTodos } from "./reducers/TodosReducer";
import React, { useState } from "react";
import { nanoid } from "nanoid";

const TodoList = () => {
    
  const [name, setName] = useState([]);
  const todos = useSelector(stateTodos);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <input
          type="text"
          name="todo"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
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
              <button
                onClick={() => dispatch(edit({ id: todo.id, data: "pippo" }))}
              >
                edit
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
