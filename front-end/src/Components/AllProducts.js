import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

// console.log(API);
function AllProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((res) => {
          setProducts(res.data);
        }).catch((err)=>{
          console.log(err)
        })
  }, []);

  let productList = products.map((product, index)=>{
    return (
      <div key={index} className="Product" >
        <img src={product.image} alt={product.name}></img>
        <Link to={`/products/${product.id}`}><h3>{product.name} Details</h3></Link>

      </div>
    )
  })

  return (
    <div className="Products">
      {productList}
    </div>
  );
}

export default AllProducts;
