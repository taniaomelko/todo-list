import { ITodo } from '../../types/i-todo'
import {
  FilterTodosActionType,
  FetchTodosActionType,
  ToggleTodoActionType,
  AddTodosTypeAction,
} from '../../types/action-types'

export const fetchTodosAction = (todos: ITodo[]): FetchTodosActionType => ({
  'type': 'FETCH_TODOS',
  'payload': todos,
})

export const filterTodosAction = (filter: string): FilterTodosActionType => ({
  'type': 'FILTER_TODOS',
  'payload': filter,
})

export const toggleTodoAction = (id: number): ToggleTodoActionType => ({
  'type': 'TOGGLE_TODO',
  'payload': id,
})

export const addTodoAction = (todoTitle: string): AddTodosTypeAction => ({
  'type': 'ADD_TODO',
  'payload': todoTitle,
})
