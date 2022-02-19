import { useState , useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct]= useState({
    name: "",
    description: "",
    image: "",
    weight: 0,
    price: 0,
    rating: 0,
    featured: false,
    in_stock: false
  });
  useEffect(()=>{
    axios.get(`${API}/products/${id}`)
    .then((res)=>{
      setProduct(res.data)
    }).catch((err)=>{
      navigate("*")
    })
  }, [id, navigate])

  const handleInputChange = (event) =>{
    setProduct({...product, [event.target.id]: event.target.value })
  }
  const handleCheckboxChange = () =>{
    
    setProduct({...product, featured: !product.featured})
  }
  const handleCheckChange = () =>{
    setProduct({...product, in_stock: !product.in_stock})
  }
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    
    axios.put(`${API}/products/${id}`, product)
    .then(()=>{
      navigate("/products")
    }).catch((err)=>{
      console.log(err)
    })
  }
    return (
      <div className="edit">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name"></label>
          <input
          id="name"
          value={product.name}
          type="text"
          onChange={handleInputChange}
          placeholder="Name of product..."
          required
          />
          <label htmlFor="description"></label>
          <input
          id="description"
          value={product.description}
          type="text"
          onChange={handleInputChange}
          placeholder="Description of product..."
          required
          />
          <label htmlFor="image"></label>
          <input
          id="image"
          value={product.image}
          type="text"
          onChange={handleInputChange}
          placeholder="http://..."
          required
          />
          <label htmlFor="weight"></label>
          <input
          id="weight"
          value={product.weight}
          type="number"
          onChange={handleInputChange}
          placeholder="Item weight"
          required
          />
          <label htmlFor="price"></label>
          <input
          id="price"
          value={product.price}
          type="number"
          onChange={handleInputChange}
          placeholder="Product price"
          required
          />
          <label htmlFor="rating"></label>
          <input
          id="rating"
          value={product.rating}
          type="number"
          onChange={handleInputChange}
          placeholder="Rating 1-5"
          required
          />
          <label htmlFor="featured">Featured Product? </label>
          <input
          id="featured"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={product.featured}
          />
          <label htmlFor="in_stock">Product in Stock? </label>
          <input
          id="in_stock"
          type="checkbox"
          onChange={handleCheckChange}
          checked={product.in_stock}
          />
          <input type="submit" />
        </form>
        <h1><Link to={`/products/${id}`}> Cancel Edit </Link></h1>
      </div>
    );
  }
  
  export default EditProduct;
