import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
const API = process.env.REACT_APP_API_URL;

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [subtotal, setSubTotal]= useState(0);
  const [itemCount, setItemCount] = useState(0);
  const [viewcart, setviewCart] = useState(false);
  const [itemName, setitemName] = useState("");
  const [listproducts, setListProducts] = useState([
   {productName: itemName , productAmount: itemCount}
  ])

  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((res) => {
          setProducts(res.data);
        }).catch((err)=>{
          console.log(err)
        })
  }, []);

  const handleSort = ()=>{
    let sorted = products.sort((a,b)=>{
      return a.price > b.price ? 1 : -1;
    })
    console.log(productList)
    console.log(sorted)
  }
  const handleAdd =(e) =>{
      setItemCount(itemCount + 1)
      setSubTotal(subtotal + Number(e.target.value))
  }
  const viewCart =()=>{
    console.log(viewcart)
    setviewCart(!viewcart)
  }

  let productList = products.map((product, index)=>{
    const formatPrice = (price) => `$${price.toFixed(2)}`
    return (
      <div key={index}>
        <div className="description">
          <Link to={`/products/${product.id}`}><h2>{product.description}</h2></Link>
          <span><button id={product.name} value={product.price} onClick={handleAdd} className="Cart">Add to Cart</button></span>
        </div>
        <article key={index} className="Product" >
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name}></img>
          <h3>{formatPrice(product.price)}</h3> 
        </article>
        <hr></hr>
      </div>
    )
  })
  

  return (
    <div >
      <div className="buttons"><button>Sort by Featured</button>
          <button onClick={handleSort}>Sort By Price</button>
          <button onClick={viewCart}>{!viewcart ? "View Cart" : "Hide Cart "}</button>
          {viewcart ? <Cart itemName={itemName} itemCount={itemCount} subtotal={subtotal}/> : null}
      </div>
      <hr></hr>
      <div className="Products">{productList}</div>
    </div>
  );
}

export default AllProducts;
