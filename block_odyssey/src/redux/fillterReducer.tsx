import { createSlice } from "@reduxjs/toolkit"

export interface Ifilter {
  conditions: "all" | "title" | "brand" | "desc",
  searchText: string | null
}

const initialState: Ifilter = {
  conditions: "all",
  searchText: null
}

const fillterReducer = createSlice({
  name: "fillterReducer",
  initialState,
  reducers: {
    changeCon: (state, action) => {
      state.conditions = action.payload.condition;
      state.searchText = action.payload.searchText;
    }
  }
})

export default fillterReducer;