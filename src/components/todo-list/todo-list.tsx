import React, { useEffect } from 'react'
import './todo-list.scss'
import fetchData from '../../data/api'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodosAction, filterTodosAction } from '../../redux/actions'
import { RootState } from '../../redux/reducers'
import { Todo } from '../todo/todo'
import { ITodo } from '../../types/i-todo'
import { FilterTodosActionType, FetchTodosActionType }
  from '../../types/action-types'

export const TodoList: React.FC = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state: RootState) => state.todos.filteredTodos)

  useEffect(() => {
    const fetchTodos = async (): Promise<void> => {
      const data = await fetchData()
      dispatch(fetchTodosAction(data as ITodo[]) as FetchTodosActionType)
    }

    fetchTodos()
  }, [dispatch])

  const filterTodos = (filter: string): void => {
    dispatch(filterTodosAction(filter) as FilterTodosActionType)
  }

  return (
    <div className="todo-list">
      <div className="todo-list-filter">
        <button
          className="button button-primary"
          onClick={(): void => filterTodos('all')}
        >
          All
        </button>
        <button
          className="button button-primary button-green"
          onClick={(): void => filterTodos('completed')}
        >
          Completed
        </button>
        <button
          className="button button-primary button-red"
          onClick={(): void => filterTodos('incompleted')}
        >
          Not Completed
        </button>
      </div>

      <div className="todo-list-list">
        {todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </div>
    </div>
  )
}
