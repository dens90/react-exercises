import { createSlice } from "@reduxjs/toolkit";

const initialState = { arr: [], title: "" };

export const TodosReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action) => {
      state.arr.push(action.payload);
    },

    remove: (state, action) => {
      state.arr = state.arr.filter((todo) => todo.id !== action.payload.id);
    },

    edit: (state, action) => {
      const index = state.arr.findIndex((v) => v.id === action.payload.id);
      state.arr[index].title = action.payload.data;
    },
  },
});

export const { add } = TodosReducer.actions;
export const { remove } = TodosReducer.actions;
export const { edit } = TodosReducer.actions;
export const stateTodos = (state) => state.todos.arr;
export default TodosReducer.reducer;

// edit: (state, action) => {
//     const {todoList} = state
//     state.arr = state.arr.map((item) => {
//        if(item.id === action.payload.id){
//         return  action.payload
//        }
//          return item
//     })
