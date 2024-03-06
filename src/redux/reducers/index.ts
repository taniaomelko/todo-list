import { combineReducers } from 'redux'
import { TodoListReducer } from './todo-list'

export const RootReducer = combineReducers({
  'todos': TodoListReducer,
})

export type RootState = ReturnType<typeof RootReducer>
