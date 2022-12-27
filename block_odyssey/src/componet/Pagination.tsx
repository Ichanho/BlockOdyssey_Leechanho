import { current } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import pageInfoReducer, { IpageInfo } from "../redux/pageInfoReducer";
import store from "../redux/store";
import { RootState, useAppDispatch } from "../redux/store";
import "./Pagination.css"

function Pagination() {
  const dispatch = useAppDispatch();
  const pageInfo: IpageInfo = useSelector((state: RootState) => (
    state.pageInfoReducer
  ))
  const currentPage = pageInfo.currentPage;
  const totalPage = pageInfo.totalPage;

  function changePage(e: React.MouseEvent<HTMLButtonElement>) {
    const e_value: "pre" | "next" | string = e.currentTarget.value

    if (e_value === "pre") {
      if (currentPage > 1) { dispatch(pageInfoReducer.actions.changePage(currentPage - 1)) }
    } else if (e_value === "next") {
      if (currentPage < totalPage) { dispatch(pageInfoReducer.actions.changePage(currentPage + 1)) }
    } else {
      dispatch(pageInfoReducer.actions.changePage(Number(e_value)))
    }

  }

  return <div className="pagination">
    <button onClick={changePage} value="pre">{"<"}</button>
    {
      (currentPage < 5) && <div>
        <button onClick={changePage} value={1}>{1}</button>
        <button onClick={changePage} value={2}>{2}</button>
        <button onClick={changePage} value={3}>{3}</button>
        <button onClick={changePage} value={4}>{4}</button>
        <button onClick={changePage} value={5}>{5}</button>
        <span>・・・</span>
        <button onClick={changePage} value={totalPage}>{totalPage}</button>
      </div>
    }
    {
      (currentPage >= 5 && currentPage < (totalPage - 2)) && <div>
        <button onClick={changePage} value={1}>{1}</button>
        <span>・・・</span>
        <button onClick={changePage} value={currentPage-1}>{currentPage-1}</button>
        <button onClick={changePage} value={currentPage}>{currentPage}</button>
        <button onClick={changePage} value={currentPage+1}>{currentPage+1}</button>
        <span>・・・</span>
        <button onClick={changePage} value={totalPage}>{totalPage}</button>
      </div>
    }
    {
      (currentPage >= (totalPage - 2)) && <div>
        <button onClick={changePage} value={1}>{1}</button>
        <span>・・・</span>
        <button onClick={changePage} value={totalPage-4}>{totalPage-4}</button>
        <button onClick={changePage} value={totalPage-3}>{totalPage-3}</button>
        <button onClick={changePage} value={totalPage-2}>{totalPage-2}</button>
        <button onClick={changePage} value={totalPage-1}>{totalPage-1}</button>
        <button onClick={changePage} value={totalPage}>{totalPage}</button>
      </div>
    }
    <button onClick={changePage} value="next">{">"}</button>
  </div>
}

export default Pagination;