import { configureStore, Store } from '@reduxjs/toolkit'
import { RootReducer } from './reducers'

declare global {
  interface Window {
    store: ReturnType<typeof getStore>
  }
}

export const getStore = (): Store => configureStore({
  reducer: RootReducer,
})
