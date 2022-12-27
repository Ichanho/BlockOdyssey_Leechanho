import {createSlice} from "@reduxjs/toolkit"

const fillterItem = createSlice({
  name: "fillterItem",
  initialState: {
    conditions: "all",
    userText: ""
  },
  reducers: {
    changeCon: (state, action) => {
      state.conditions = action.condition.value;
      state.userText = action.userText.value;
    }
  }
})

export default fillterItem;