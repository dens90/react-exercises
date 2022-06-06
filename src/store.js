import { counterState } from "./reducers/counterReducer";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers,  } from "redux";
import TodosReducer from "./reducers/TodosReducer";
import counter from './reducers/counterReducer'

const rootReducer = combineReducers({
  counter: counter,
  todos: TodosReducer,
});

export const store = configureStore({
    reducer: rootReducer
});



