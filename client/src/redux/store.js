import { configureStore } from '@reduxjs/toolkit'
import loginPopupReducer from './loginSlice'

export const store = configureStore({
  reducer: {
    popup: loginPopupReducer,
  }
})