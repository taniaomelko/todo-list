import axios from 'axios'
import { ITodo } from '../types/ITodo'

const URL = process.env.PUBLIC_URL + '/api/api.json'

const fetchData = async (): Promise<ITodo[]> => {
  try {
    const response = await axios.get(URL)
    console.log(response.data)

    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export default fetchData
