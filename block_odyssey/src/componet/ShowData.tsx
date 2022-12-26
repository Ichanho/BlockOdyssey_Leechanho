import useFetch from "../Hooks/useFetch";
import Product from "./Product";
import "./ShowData.css"

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

  console.log(products);
  products.map((each) => { console.log(each) });


  return <div className="show_data">
    <p>{`검색된 데이터 : ${products.length}`}</p>
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

          {products.map((product, index)=>{
            return <Product product={product} productNum={index} key={product.id}/>;
          })}
        </tbody>
      </table>

      <div className="controll">
        <p>페이지 당 행 :</p>
        <select>
          <option key={1} value={10}>{10}</option>
          <option key={2} value={20}>{20}</option>
          <option key={3} value={50}>{50}</option>
        </select>
        <div className="buttons">페이지 번호</div>
      </div>
    </div>
  </div>
}

export default ShowData;