import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
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
          <h1> Featured Product: {product.featured ? <span>⭐️</span> : "No" } <span>In Stock? {product.in_stock ? "Yes" : "Out of Stock"} </span></h1>
          <h1>{product.name} {product.description}</h1>
          <img src={product.image}alt={product.description}></img>
          <p>
            <h3>Product Weight: {product.weight} Oz</h3>
            <h3>Price: {product.price} USD</h3>
            <h3>Rating: {product.rating}</h3>
          </p>
        <button onClick={handleDelete}> Delete Product </button>
        <button><Link to={`/products/${id}/edit`}>Edit</Link></button>
        <button>Add To Cart</button>
        <h3><Link to="/products"> Back to All Products</Link></h3>
      </article>
    );
  }
  
  export default ProductDetails;