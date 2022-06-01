import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { incrementCounter } from "./CounterReducer";
import "./index.css";
import { store } from "./Store";
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(

//     <React.StrictMode>
//             <App />
//     </React.StrictMode>
// )

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter(2));
store.dispatch(incrementCounter(3));
