import React from 'react'
import './todos.scss'
import { TodoList } from '../todo-list/todo-list'
import { TodoForm } from '../todo-form/todo-form'
import { Statistics } from '../statistics/statistics'

export const Todos: React.FC = () => {
  return (
    <section className="todos">
      <div className="container">
        <div className="todos-wrap">
          <div>
            <div className="todos-form">
              <TodoForm />
            </div>
            <div className="todos-statistics">
              <Statistics />
            </div>
          </div>
          <TodoList />
        </div>
      </div>
    </section>
  )
}
