import { combineReducers } from "redux"
import { TodoListReducer } from "./todoList"

export const RootReducer = combineReducers({
  todos: TodoListReducer,
})

export type RootState = ReturnType<typeof RootReducer>
