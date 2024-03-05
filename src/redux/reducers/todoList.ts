import { ITodo } from "../../types/ITodo"

const initialState = {
  allTodos: [],
  filteredTodos: [],
  filter: '',
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

export const TodoListReducer = (state: TodoListState = initialState, action: TodoListAction): TodoListState => {
  switch (action.type) {
    case 'FETCH_TODOS':
      return {
        ...state,
        allTodos: action.payload,
        filteredTodos: action.payload,
      }
    case 'FILTER_TODOS':
      switch (action.payload) {
        case 'completed':
          return {
            ...state,
            filter: 'completed',
            filteredTodos: state.allTodos.filter(todo => todo.completed),
          }
        case 'incompleted':
          return {
            ...state,
            filter: 'incompleted',
            filteredTodos: state.allTodos.filter(todo => !todo.completed),
          }
        default:
          return {
            ...state,
            filter: '',
            filteredTodos: state.allTodos,
          }
      }
    case 'TOGGLE_TODO':
      return {
        ...state,
        allTodos: state.allTodos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      }
    case 'ADD_TODO':
      const maxId = state.allTodos.reduce((max, todo) => Math.max(max, todo.id), 0)

      const newTodo = {
        id: maxId + 1, 
        title: action.payload,
        completed: false,
      }

      return {
        ...state,
        allTodos: [...state.allTodos, newTodo],
      }
    default:
      return state
  }
}
