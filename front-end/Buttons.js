import Cart from "./Cart"
import { useState } from "react"
import currencyFormatter from "./Utility"
import { Link } from "react-router-dom"


function Button({itemcount, subtotal}){
    const [viewcart, setviewCart] = useState(false);

    const viewCart =()=>{
        setviewCart(!viewcart)
      }
    
    return(
        <div className="buttons">
          {viewcart ? <Cart itemcount={itemcount} subtotal={subtotal}/> : <div><h2>Subtotal: {currencyFormatter.format(subtotal)}</h2>
          <Link to=""><h3 className="checkout">Buy Now</h3></Link></div>}
         <div><button onClick={viewCart}>{!viewcart ? "View Cart" : "Hide Cart "}</button></div> 
      </div>
    )
}
export default Button;