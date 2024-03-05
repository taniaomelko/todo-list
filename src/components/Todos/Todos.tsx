import './Todos.scss'
import { TodoList } from '../TodoList/TodoList'
import { TodoForm } from '../TodoForm/TodoForm'
import { Statistics } from '../Statistics/Statistics'

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
