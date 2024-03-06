import { ITodo } from '../../types/i-todo'

const initialState = {
  'allTodos': [],
  'filteredTodos': [],
  'filter': '',
}

interface TodoListState {
  allTodos: ITodo[]
  filteredTodos: ITodo[]
  filter: string
}

type TodoListAction =
  | { type: 'FETCH_TODOS', payload: ITodo[] }
  | { type: 'FILTER_TODOS', payload: string }
  | { type: 'TOGGLE_TODO', payload: number }
  | { type: 'ADD_TODO', payload: string }

const filterTodos = (
  allTodos: ITodo[],
  filter: string,
): ITodo[] => {
  switch (filter) {
    case 'completed': {
      return allTodos.filter((todo) => todo.completed)
    }
    case 'incompleted': {
      return allTodos.filter((todo) => !todo.completed)
    }
    default: {
      return allTodos
    }
  }
}

export const TodoListReducer = (
  state: TodoListState = initialState,
  action: TodoListAction,
): TodoListState => {
  switch (action.type) {
    case 'FETCH_TODOS': {
      return {
        ...state,
        'allTodos': action.payload,
        'filteredTodos': action.payload,
      }
    }

    case 'FILTER_TODOS': {
      return {
        ...state,
        'filter': action.payload,
        'filteredTodos': filterTodos(state.allTodos, action.payload),
      }
    }

    case 'TOGGLE_TODO': {
      return {
        ...state,
        'allTodos': state.allTodos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, 'completed': !todo.completed }
          }
          return todo
        }),
      }
    }

    case 'ADD_TODO': {
      const maxId = Math.max(...state.allTodos.map((todo) => todo.id), 0)

      const newTodo = {
        'id': maxId + 1,
        'title': action.payload,
        'completed': false,
      }

      return {
        ...state,
        'allTodos': [...state.allTodos, newTodo],
      }
    }

    default: {
      return state
    }
  }
}
