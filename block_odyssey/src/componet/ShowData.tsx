import { useEffect, useRef, useState } from "react";
import useFetch from "../Hooks/useFetch";
import Product from "./Product";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import pageInfoReducer, { IpageInfo } from "../redux/pageInfoReducer";
import Pagination from "./Pagination";
import "./ShowData.css"
import { Ifilter } from "../redux/fillterReducer";

export interface Iproduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

function ShowData() {
  const products: Iproduct[] = useFetch(`https://dummyjson.com/products?limit=100`);

  const dispatch = useAppDispatch();
  const pageInfo: IpageInfo = useSelector((state: RootState) => (
    state.pageInfoReducer
  ));
  const fillterInfo: Ifilter = useSelector((state: RootState) => (state.fillterReducer));

  const newProducts = products.filter((product) => {
    if (fillterInfo.searchText == "" || fillterInfo.searchText === null) {
      return true
    } else {
      let result: boolean = false;
      const fillterText = fillterInfo.searchText.toLowerCase();
      const productTitle = product.title.toLowerCase();
      const productBrand = product.brand.toLowerCase();
      const productDesc = product.description.toLowerCase();
      if (fillterInfo.conditions === "all") {
        result = (
          productTitle.includes(fillterText) ||
          productBrand.includes(fillterText) ||
          productDesc.includes(fillterText)
        )
      } else if (fillterInfo.conditions === "title") {
        result = (productTitle.includes(fillterText))
      } else if (fillterInfo.conditions === "brand") {
        result = (productBrand.includes(fillterText))
      } else if (fillterInfo.conditions === "desc") {
        result = (productDesc.includes(fillterText))
      } else {

      }
      return result
    }
  });

  function handlePageNum(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(pageInfoReducer.actions.changeDivPage(Number(e.target.value)));
  }

  useEffect(() => {
    dispatch(pageInfoReducer.actions.changeTotalItem(newProducts.length));
  }, [newProducts])


  return <div className="show_data">
    <p>{`검색된 데이터 : ${pageInfo.totalItem}`}</p>
    <div className="container">
      <table>
        <tbody>
          <tr className="category_name">
            <td>상품번호</td>
            <td>상품명</td>
            <td>브랜드</td>
            <td>상품내용</td>
            <td>가격</td>
            <td>평점</td>
            <td>재고</td>
          </tr>

          {newProducts.map((product, index) => {
            const _index = index + 1;
            const min = (pageInfo.currentPage - 1) * pageInfo.dividPage;
            const max = pageInfo.currentPage * pageInfo.dividPage;
            if (min < _index && _index < max)
              return <Product product={product} productNum={index} key={product.id} />;
          })}
        </tbody>
      </table>

      <div className="controll">
        <p>페이지 당 행 :</p>
        <select onChange={handlePageNum}>
          <option key={1} value={10}>{10}</option>
          <option key={2} value={20}>{20}</option>
          <option key={3} value={50}>{50}</option>
        </select>
        <Pagination />
      </div>
    </div>
  </div>
}

export default ShowData;