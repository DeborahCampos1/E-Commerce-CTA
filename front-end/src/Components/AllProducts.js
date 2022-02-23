import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import SelectOptions from "./Sort";
import currencyFormatter from "./Utility"

const API = process.env.REACT_APP_API_URL;

function AllProducts({getSubTotal}) {
  
  const [products, setProducts] = useState([]);
  const [subtotal, setSubTotal]= useState(0);
  const [itemcount, setitemcount] = useState(0);
  const [viewcart, setviewCart] = useState(false);
  const [itemname, setitemName] = useState([]);
  const [optionvalue, setOptionValue] = useState("");
  const [itemlist, setItemList] = useState([itemname])

  const handleSort = (e)=>{
      setOptionValue(e.target.value)
      console.log(optionvalue)

    let sorted = products.sort((a,b)=>{
      return a.price > b.price ? 1 : -1;
    })
    setProducts(sorted)
    console.log(sorted)
  }
  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((res) => {
          setProducts(res.data);
        }).catch((err)=>{
          console.log(err)
        })
  }, []);

  const handleAdd =(e) =>{
      setitemcount(itemcount + 1)
      setSubTotal(subtotal + Number(e.target.value))
      setitemName([...itemname, e.target.id])
      // if(!itemlist.includes(e.target.id)){
        setItemList([...itemlist, e.target.id])
      // }
      console.log(itemlist)
  }
  const handleSubtract =(e) =>{
        if(itemcount > 0 && itemlist.includes(e.target.id)){
          for (let i=0; i< itemlist.length; i++){
            if (itemlist[i]=== e.target.id){
              itemlist.splice(i,1)
            }
          }
          setItemList(itemlist)
          setitemcount(itemcount - 1)
          setSubTotal(subtotal - Number(e.target.value))
        }
  }
  const viewCart =()=>{
    console.log(viewcart)
    setviewCart(!viewcart)
  }
 getSubTotal(subtotal)

  let productList = products.map((product, index)=>{
    const formatPrice = (price) => `$${price.toFixed(2)}`
    return (
      <div key={index}>
        <div className="description">
          <Link to={`/products/${product.id}`}><h2>{product.description}</h2></Link>
          <span><button id={product.description} value={product.price} onClick={handleAdd} className="Cart">Add to Cart</button></span>
        </div>
        <article key={index} className="Product" >
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name}></img>
          <h3>{formatPrice(product.price)}</h3> 
        </article>
          <span><button id={product.description} value={product.price} onClick={handleSubtract} className="Cart">Remove Item</button></span>
        <hr></hr>
      </div>
    )
  })
  

  return (
    <div >
      <div className="buttons">
        <div><SelectOptions onChange={handleSort} /></div>
          {viewcart ? <Cart itemlist={itemlist} itemname={itemname} itemcount={itemcount} subtotal={subtotal}/> : <div><h2>Subtotal: {currencyFormatter.format(subtotal)}</h2>
          <Link to=""><h3 className="checkout">Buy Now</h3></Link></div>}
         <div><button onClick={viewCart}>{!viewcart ? "View Cart" : "Hide Cart "}</button></div> 
      </div>
      <hr></hr>
      <div className="Products">{productList}</div>
    </div>
  );
}

export default AllProducts;
