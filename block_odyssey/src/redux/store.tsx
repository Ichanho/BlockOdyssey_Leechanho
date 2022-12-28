import { createSlice, configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux";
import pageInfoReducer from "./pageInfoReducer";
import fillterReducer from "./fillterReducer";

const store = configureStore({
  reducer: {
    pageInfoReducer: pageInfoReducer.reducer,
    fillterReducer: fillterReducer.reducer
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()