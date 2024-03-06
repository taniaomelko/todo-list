import { ITodo } from './i-todo'

export type FetchTodosActionType = {
  type: string
  payload: ITodo[]
}

export type ToggleTodoActionType = {
  type: string
  payload: number
}

export type FilterTodosActionType = {
  type: string
  payload: string
}

export type AddTodosTypeAction = {
  type: string
  payload: string
}
