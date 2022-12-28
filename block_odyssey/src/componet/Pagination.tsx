import { useSelector } from "react-redux";
import pageInfoReducer, { IpageInfo } from "../redux/pageInfoReducer";
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

  if (totalPage <= 5) {
    const array = [1];
    for (let i = 0; i < totalPage; i++) {
      array[i] = i + 1;
    }

    return <div className="pagination">
      <button onClick={changePage} value="pre">{"<"}</button>
      {array.map((each) => {
        return <button onClick={changePage} className={(currentPage === each) ? "currnet_page" : ""} value={each} key={`pageNum${each}`}>{each}</button>
      })}
      <button onClick={changePage} value="next">{">"}</button>
    </div>
  } else {
    return <div className="pagination">
      <button onClick={changePage} value="pre">{"<"}</button>

      {currentPage != 1 && (<button onClick={changePage} value={1}>{1}</button>)}

      {currentPage >= 5 && (<span>・・・</span>)}

      {currentPage == totalPage && (<button onClick={changePage} value={currentPage - 4}>{currentPage - 4}</button>)}

      {currentPage > 4 && currentPage >= totalPage - 1
        && (<button onClick={changePage} value={currentPage - 3}>{currentPage - 3}</button>)}

      {currentPage > 3 && (currentPage >= totalPage - 2 || currentPage == 4) && (<button onClick={changePage} value={currentPage - 2}>{currentPage - 2}</button>)}

      {currentPage > 2 && (<button onClick={changePage} value={currentPage - 1}>{currentPage - 1}</button>)}

      <button onClick={changePage} className="currnet_page" value={currentPage}>{currentPage}</button>

      {currentPage < totalPage - 1 && (<button onClick={changePage} value={currentPage + 1}>{currentPage + 1}</button>)}

      {(currentPage <= 3 || currentPage === totalPage - 3) && currentPage < totalPage - 2 && (<button onClick={changePage} value={currentPage + 2}>{currentPage + 2}</button>)}

      {currentPage <= 2 && (<button onClick={changePage} value={currentPage + 3}>{currentPage + 3}</button>)}

      {currentPage == 1 && (<button onClick={changePage} value={currentPage + 4}>{currentPage + 4}</button>)}


      {currentPage < totalPage - 3 && (<span>・・・</span>)}

      {currentPage != totalPage && (<button onClick={changePage} value={totalPage}>{totalPage}</button>)}

      <button onClick={changePage} value="next">{">"}</button>
    </div>
  }

}

export default Pagination;