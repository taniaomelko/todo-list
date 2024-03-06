import React, { useState } from 'react'
import './todo.scss'
import { useDispatch, useSelector } from 'react-redux'
import { ITodo } from '../../types/i-todo'
import { CrossIcon, CheckIcon } from '../icons'
import { toggleTodoAction, filterTodosAction } from '../../redux/actions'
import { RootState } from '../../redux/reducers'
import { ToggleTodoActionType, FilterTodosActionType }
  from '../../types/action-types'

interface TodoProps {
  todo: ITodo
}

export const Todo: React.FC<TodoProps> = ({ todo }) => {
  const { id, title, completed } = todo
  const [isCompleted, setIsCompleted] = useState(completed)
  const dispatch = useDispatch()
  const filter = useSelector((state: RootState) => state.todos.filter)

  const handleClick = (): void => {
    setIsCompleted(!isCompleted)
    dispatch(toggleTodoAction(id) as ToggleTodoActionType)
    dispatch(filterTodosAction(filter) as FilterTodosActionType)
  }

  return (
    <div className={`todo ${isCompleted ? 'completed' : ''}`}>
      <div>
        <div className="todo-title" onClick={handleClick}>
          {title}
        </div>
      </div>

      <div className="todo-icon">
        {isCompleted ? <CheckIcon /> : <CrossIcon />}
      </div>
    </div>
  )
}
