import { Link, usParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;


function NewProduct() {
  let navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    image: "",
    weight: 0,
    price: 0,
    rating: 0,
    featured: false,
    in_stock: false
  });


  const addProduct = ()=>{
    axios.post(`${API}/products`, product)
    .then((res)=>{
      navigate("/products");
    }).catch((err)=> navigate("*"));

  }
  const handleInputChange = (event) =>{
      setProduct({...product, [event.target.id]: event.target.value})
  }

  const handleCheckChange = ()=>{
    setProduct({...product, in_stock: !product.in_stock})
  }
  const handleSubmit = (e)=>{
    e.preventDefault()

    addProduct(product)
  }


    return (
      <div className="new">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
        id="name"
        value={product.name}
        type="text"
        onChange={handleInputChange}
        placeholder="Name of product..."
        required
        />
        <label htmlFor="description">Description of product:</label>
        <input
        id="description"
        value={product.description}
        type="text"
        onChange={handleInputChange}
        placeholder="Description of product..."
        required
        />
        <label htmlFor="image">Image URL:</label>
        <input
        id="image"
        value={product.image}
        type="text"
        onChange={handleInputChange}
        placeholder="http://..."
        required
        />
        <label htmlFor="weight">Product Weight:</label>
        <input
        id="weight"
        value={product.weight}
        type="number"
        onChange={handleInputChange}
        placeholder="Item weight"
        required
        />
        <label htmlFor="price">Price: </label>
        <input
        id="price"
        value={product.price}
        type="number"
        onChange={handleInputChange}
        placeholder="Product price"
        required
        />
        <label htmlFor="rating">Rating 1-5:</label>
        <input
        id="rating"
        value={product.rating}
        type="number"
        onChange={handleInputChange}
        placeholder="Rating 1-5"
        required
        />
        {/* <label htmlFor="featured">Featured Product? </label>
        <input
        id="featured"
        type="checkbox"
        onChange={handleCheckboxChange}
        checked={product.featured}
        /> */}
        <label htmlFor="in_stock">Product in Stock? </label>
        <input
        id="in_stock"
        type="checkbox"
        onChange={handleCheckChange}
        checked={product.in_stock}
        />
        <input type="submit" />
      </form>
      <h1><Link to={`/products/`}> Back </Link></h1>
    </div>
    );
  }
  
  export default NewProduct;
