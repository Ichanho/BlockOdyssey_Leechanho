import { useState } from "react";
import { Iproduct } from "./ShowData";
import "./Product.css"

interface Iprops {
  product: Iproduct;
  productNum: number;
}

function Product({ product: p, productNum: num }: Iprops) {
  const [product, setProduct] = useState(p);



  return <tr className="each_product">
    <td>{num + 1}</td>
    <td>{product.title}</td>
    <td>{product.brand}</td>
    <td>{product.description.length > 40 ? `${product.description.slice(0,40)}...` : product.description}</td>
    <td>{product.price}</td>
    <td>{product.rating}</td>
    <td>{product.stock}</td>
  </tr>
}

export default Product;