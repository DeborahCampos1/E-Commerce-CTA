import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
const API = process.env.REACT_APP_API_URL;

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
    const formatPrice = (price) => `$${price.toFixed(2)}`
    return (
      <div>
        <div className="description">
          <Link to={`/products/${product.id}`}><h2>{product.description}</h2></Link>
          <span><button className="">Add to Cart</button></span>
        </div>
        <article key={index} className="Product" >
          <h3>{product.name}</h3><span></span>
          <img src={product.image} alt={product.name}></img>
          <h3>{formatPrice(product.price)}</h3> 
        
        {/* <h3>{product.description}</h3> */}
        </article>
        <hr></hr>
      </div>
    )
  })

  return (
    <div >
      <div className="buttons"><button>Sort by Featured</button>
            <button>Sort By Price</button>
            <button> View Cart</button>
            <Cart products={products}/>
      </div>
      <hr></hr>
      <div className="Products">{productList}</div>
    </div>
  );
}

export default AllProducts;
