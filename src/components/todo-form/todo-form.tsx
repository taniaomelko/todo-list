import React, { useState } from 'react'
import './todo-form.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addTodoAction, filterTodosAction } from '../../redux/actions'
import { RootState } from '../../redux/reducers'
import { AddTodosTypeAction, FilterTodosActionType }
  from '../../types/action-types'

export const TodoForm: React.FC = () => {
  const [title, setTitle] = useState<string>('')
  const [disabled, setDisabled] = useState(false)

  const dispatch = useDispatch()
  const filter = useSelector((state: RootState) => state.todos.filter)

  const maxSymbols = 40

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target
    setTitle(value)

    if (value.trim().length <= maxSymbols) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (title.trim()) {
      dispatch(addTodoAction(title) as AddTodosTypeAction)
      dispatch(filterTodosAction(filter) as FilterTodosActionType)
      setTitle('')
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={handleChange}
        placeholder="Enter new todo title"
      />
      <button
        type="submit"
        className="button button-primary"
        disabled={disabled}
      >
        Add Todo
      </button>

      {disabled &&
        <p className="todo-form-error">
          {`Maximum ${maxSymbols} symbols allowed for a todo.`}
        </p>
      }
    </form>
  )
}
