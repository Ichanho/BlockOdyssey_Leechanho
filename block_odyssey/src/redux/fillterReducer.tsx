import { createSlice } from "@reduxjs/toolkit"

export interface Ifilter {
  condition: "all" | "title" | "brand" | "desc",
  searchText: string | null
}
const initialState: Ifilter = {
  condition: "all",
  searchText: null
}

const fillterReducer = createSlice({
  name: "fillterReducer",
  initialState,
  reducers: {
    changeCon: (state, action) => {
      state.condition = action.payload.condition;
      state.searchText = action.payload.searchText;
    }
  }
})

export default fillterReducer;