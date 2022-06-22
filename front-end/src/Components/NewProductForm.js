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
  const handleCheckboxChange = () =>{
    
    setProduct({...product, featured: !product.featured})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    if(!/[A-Za-z]/.test(product.name) || !/[A-Za-z]/.test(product.description) ){
      alert ("Please enter a valid Name & Description of product. For more help, please see our FAQ page.")
      return;
    } else {
      addProduct(product)
    }
  }


    return (
      <div className="new">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"><h2>Name: </h2></label>
        <input
        id="name"
        value={product.name}
        type="text"
        onChange={handleInputChange}
        placeholder="Name of product..."
        required
        />
        <label htmlFor="description"><h2>Description of product:</h2></label>
        <input
        id="description"
        value={product.description}
        type="text"
        onChange={handleInputChange}
        placeholder="Description of product..."
        required
        />
        <label htmlFor="image"><h2>Image URL: </h2></label>
        <input
        id="image"
        value={product.image}
        type="text"
        onChange={handleInputChange}
        placeholder="http://..."
        required
        />
        <label htmlFor="weight"><h2>Product Weight:</h2></label>
        <input
        id="weight"
        value={product.weight}
        type="number"
        min="1"
        onChange={handleInputChange}
        placeholder="Item weight"
        required
        />
        <label htmlFor="price"><h2>Price: </h2></label>
        <input
        id="price"
        value={product.price}
        type="number"
        min="250"
        max="10,000"
        onChange={handleInputChange}
        placeholder="Product price"
        required
        />
        <label htmlFor="rating"><h2>Rating 1-5:</h2></label>
        <input
        id="rating"
        value={product.rating}
        type="number"
        onChange={handleInputChange}
        placeholder="Rating 1-5"
        required
        />
        <label htmlFor="featured"><h2>Featured Product? </h2></label>
        <input
        id="featured"
        type="checkbox"
        onChange={handleCheckboxChange}
        checked={product.featured}
        />
        <label htmlFor="in_stock"><h2>Product in Stock? </h2></label>
        <input
        id="in_stock"
        type="checkbox"
        onChange={handleCheckChange}
        checked={product.in_stock}
        />
        <button className="new" type="submit">Submit</button>
      </form>
      <h1><Link to={`/products/`}> Back </Link></h1>
    </div>
    );
  }
  
  export default NewProduct;
