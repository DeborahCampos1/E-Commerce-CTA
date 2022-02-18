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
      <article key={index} className="Product" >
        <img src={product.image} alt={product.name}></img>
        <Link to={`/products/${product.id}`}><h3>{product.description}</h3></Link>

      </article>
    )
  })

  return (
    <div >
      <div className="buttons"><button>Sort by Featured</button>
            <button>Sort By Price</button>
            <button> View Cart</button>
      </div>
      <div className="Products">{productList}</div>
    </div>
  );
}

export default AllProducts;
