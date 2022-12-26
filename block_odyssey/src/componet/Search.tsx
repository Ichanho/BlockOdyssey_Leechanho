import "./Search.css"

function Search() {

  return <div className="search">
    <div className="header">
      <p className="title">상품 검색</p>
      <div className="option">
        <p>검색</p>
        <select>
          <option key={1} value={"전체"}>{"전체"}</option>
          <option key={2} value={"상품명"}>{"상품명"}</option>
          <option key={3} value={"브랜드"}>{"브랜드"}</option>
          <option key={4} value={"상품내용"}>{"상품내용"}</option>
        </select>
        <input type="text"></input>
        <button>{"검색"}</button>
      </div>
    </div>
  </div>
}

export default Search;