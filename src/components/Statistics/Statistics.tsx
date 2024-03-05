import React from 'react'
import './Statistics.scss'
import { useSelector } from "react-redux"
import { RootState } from '../../redux/reducers'

export const Statistics: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.allTodos)
  const completedTasks = todos.filter(todo => todo.completed).length
  const uncompletedTasks = todos.filter(todo => !todo.completed).length

  return (
    <div className="statistics">
      <p>Completed tasks: {completedTasks}</p>
      <p>Uncompleted tasks: {uncompletedTasks}</p>
    </div>
  )
}
