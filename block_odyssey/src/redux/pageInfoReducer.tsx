import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IpageInfo {
  currentPage: number,
  totalPage: number,
  dividPage: number,
  totalItem: number,
}
const initialState: IpageInfo ={
  currentPage: 1,
  totalPage: 1,
  dividPage: 10,
  totalItem: 10
}


const pageInfoReducer = createSlice({
  name: 'pageInfoReducer',
  initialState,
  reducers: {
    changeTotalItem: (state, action: PayloadAction<number>)=>{
      state.totalItem = action.payload;
      state.totalPage = Math.ceil(action.payload / state.dividPage);
    },
    changePage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    changeDivPage: (state, action: PayloadAction<number>)=>{
      state.dividPage = action.payload;
      state.currentPage = 1;
      state.totalPage = Math.ceil(state.totalItem / state.dividPage);
    }
  }
})

export default pageInfoReducer;