import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import fillterReducer, { Ifilter } from "../redux/fillterReducer";
import pageInfoReducer from "../redux/pageInfoReducer";
import "./Search.css"


function Search() {
  const dispatch = useAppDispatch();
  const fillterInfo: Ifilter = useSelector((state: RootState) => (
    state.fillterReducer
  ));

  const [tempText, setTempText] = useState("");
  const [tempCondtion, setTempCondition] = useState("all");

  const conRef = useRef<HTMLSelectElement>(null);
  const textRef = useRef<HTMLInputElement>(null);

  const FILLTER_CONDITION = "fillterContion"
  const FILLTER_SEARCH_TEXT = "fillterSearchText"

  let saveCondition: string | null = sessionStorage.getItem(FILLTER_CONDITION);
  let saveUserText: string | null = sessionStorage.getItem(FILLTER_SEARCH_TEXT);

  function handleContidion(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const condition = conRef.current?.value;
    const searchText = textRef.current?.value;
    if (condition != null && searchText != null) {
      sessionStorage.setItem(FILLTER_CONDITION, condition);
      sessionStorage.setItem(FILLTER_SEARCH_TEXT, searchText);
    }

    dispatch(fillterReducer.actions.changeCon({ condition, searchText }));
    dispatch(pageInfoReducer.actions.changePage(1));

  }

  useEffect(() => {
    if (saveCondition != null && saveUserText != null) {
      const payload = { condition: saveCondition, searchText: saveUserText }
      dispatch(fillterReducer.actions.changeCon(payload));
      setTempText(saveUserText);
      setTempCondition(saveCondition);
    }
  }, [])

  return <div className="search">
    <div className="header">
      <p className="title">상품 검색</p>
      <div className="option">
        <p>검색</p>
        <form onSubmit={handleContidion}>
          <select ref={conRef} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { setTempCondition(e.target.value) }} value={tempCondtion}>
            <option key={1} value={"all"}>{"전체"}</option>
            <option key={2} value={"title"}>{"상품명"}</option>
            <option key={3} value={"brand"}>{"브랜드"}</option>
            <option key={4} value={"desc"}>{"상품내용"}</option>
          </select>
          <input type="text" ref={textRef} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setTempText(e.target.value); }} value={tempText} />
          <button>{"검색"}</button>
        </form>
      </div>
    </div>
  </div>
}

export default Search;