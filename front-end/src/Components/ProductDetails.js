import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import currencyFormatter from "./Utility";
import Cart from "./Cart.js"

const API = process.env.REACT_APP_API_URL;

function ProductDetails() {
  const[product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`${API}/products/${id}`)
    .then((res)=>{
      setProduct(res.data)
    }).catch((err)=>{
      console.log(err)
      navigate("*")
    })
  }, [id,navigate])

  const handleDelete =()=>{
    axios.delete(`${API}/products/${id}`)
    .then((res)=>{
      navigate("/products")
    }).catch((err)=>{
      console.log(err)
    })
  }

    return (
      <article className="details">
        <div className="detail">
          <h1>{product.description}</h1>
          <h1> Featured Product: {product.featured ? <span>⭐️</span> : "No" } | <span>{product.in_stock ? "In Stock" : "Out of Stock"} </span></h1>
        <button>Add To Cart</button>
        </div>
        <aside>
         
        </aside>
          <img src={product.image}alt={product.description}></img>
          <div>
          <h2>Price: {currencyFormatter.format(product.price)} USD</h2>
            <h3>Product Weight: {product.weight} Oz</h3>
            <h3>Rating: {product.rating}</h3>
          </div>
        <button onClick={handleDelete}> Delete </button>
        <button><Link to={`/products/${id}/edit`}>Edit</Link></button>
        <h3><Link to="/products"> Back to All Products</Link></h3>
      </article>
    );
  }
  
  export default ProductDetails;
