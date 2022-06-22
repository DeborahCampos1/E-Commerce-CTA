import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { currencyFormatter } from "./Utility"

const API = process.env.REACT_APP_API_URL;

function AllProducts({getSubTotal}) {
  
  const [products, setProducts] = useState([]);
  const [subtotal, setSubTotal]= useState(0);
  const [itemcount, setitemcount] = useState(0);
  const [viewcart, setviewCart] = useState(false);
  const [itemname, setitemName] = useState([]);
  const [optionvalue, setOptionValue] = useState("");
  // const [ratingInput, setRatingInput] = useState(0)
  const [itemlist, setItemList] = useState([])

  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((res) => {
        console.log(res.data)
          setProducts(res.data);
        }).catch((err)=>{
          console.log(err)
        })
  }, []);

  // let rated = products.filter((product)=> product.rating === ratingInput)

  let featured = products.filter((product) => product.featured);
  let inStock = products.filter((product) => product.in_stock);
  let processedProducts = products

  // const handleratingInput = (e) =>{
  //   setRatingInput(e.target.value)
  // }
  // switch statement for rating
  
  const handleSort = (e)=>{
      setOptionValue(e.target.value)
    }
    console.log(optionvalue)

  if(optionvalue === "pricelow"){
    products.sort((a,b)=> a.price - b.price);
  } if(optionvalue === "pricehigh"){
    products.sort((a,b)=> b.price - a.price)
  } if(optionvalue === "featured"){
    processedProducts = featured
  } if(optionvalue === "instock"){
    processedProducts = inStock
  }
   
  console.log(processedProducts)
  

  const handleAdd =(e) =>{
      setitemcount(itemcount + 1)
      setSubTotal(subtotal + Number(e.target.value))
      setitemName([...itemname, e.target.id])
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
    setviewCart(!viewcart)
  }

 getSubTotal(subtotal)

  let productList = processedProducts.map((product, index)=>{
    return (
      <div key={index}>
        <div className="description">
          <Link to={`/products/${product.id}`}><h2>{product.description}</h2></Link>
          <span><button id={product.description} value={product.price} onClick={handleAdd} className="Cart">Add to Cart</button></span>
        </div>
        <article key={index} className="Product" >
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name}></img>
          <h3>{currencyFormatter.format(product.price)}</h3> 
        </article>
          <span><button id={product.description} value={product.price} onClick={handleSubtract} className="Cart">Remove From Cart</button></span>
        <hr></hr>
      </div>
    )
  })
  
  let options = [" Price High-Low ", " Price Low-High", " Featured Product", "In-Stock"]

  return (
    <div>
      <div className="buttons">
        <form >
            {/* <label htmlFor="rating-input">Search By Rating: </label>
            <input id="rating-input" value={ratingInput} onChange={handleratingInput}/> */}

            <label htmlFor="sort_product"><h3>Sort Product By:  </h3></label>
            <select onChange={handleSort} name="selectList" id="selectList">
                <option>---Sort---</option>
                <option value="pricehigh">{options[0]}</option>
                <option value="pricelow">{options[1]}</option>
                <option value="featured">{options[2]}</option>
                <option value="instock">{options[3]}</option>
            </select>
        </form>
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
