import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Todo {
  id: number;
  text: string;
}

interface TodoState {
  todos: Todo[];
  nextId: number;
}

const initialState: TodoState = {
  todos: [],
  nextId: 1,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: state.nextId,
        text: action.payload,
      };
      state.todos.push(newTodo);
      state.nextId += 1;
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
