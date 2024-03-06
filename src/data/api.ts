import axios from 'axios'
import { ITodo } from '../types/i-todo'

const URL = `${process.env.PUBLIC_URL}/api/api.json`

const fetchData = async (): Promise<ITodo[]> => {
  try {
    const response = await axios.get(URL)
    return response.data
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`)
  }
}

export default fetchData
