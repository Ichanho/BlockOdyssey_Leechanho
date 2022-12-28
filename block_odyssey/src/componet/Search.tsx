import { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import fillterReducer, { Ifilter } from "../redux/fillterReducer";
import "./Search.css"
import pageInfoReducer from "../redux/pageInfoReducer";


function Search() {
  const dispatch = useAppDispatch();
  const fillterInfo: Ifilter = useSelector((state: RootState) => (
    state.fillterReducer
  ));

  const conRef = useRef<HTMLSelectElement>(null);
  const textRef = useRef<HTMLInputElement>(null)

  function handleContidion(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const condition = conRef.current?.value;
    const searchText = textRef.current?.value;
    
    dispatch(fillterReducer.actions.changeCon({condition, searchText}));
    dispatch(pageInfoReducer.actions.changePage(1));
  }

  return <div className="search">
    <div className="header">
      <p className="title">상품 검색</p>
      <div className="option">
        <p>검색</p>
        <form onSubmit={handleContidion}>
          <select ref={conRef}>
            <option key={1} value={"all"}>{"전체"}</option>
            <option key={2} value={"title"}>{"상품명"}</option>
            <option key={3} value={"brand"}>{"브랜드"}</option>
            <option key={4} value={"desc"}>{"상품내용"}</option>
          </select>
          <input type="text" ref={textRef}></input>
          <button>{"검색"}</button>
        </form>
      </div>
    </div>
  </div>
}

export default Search;