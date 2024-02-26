import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITodoState } from "./todo.types";

const initialState: ITodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        { id: state.todos.length, text: action.payload },
      ];
    },
    remove: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = todoSlice.actions;

export default todoSlice.reducer;
