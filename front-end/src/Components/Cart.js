import { useState , useEffect} from 'react';
import { Link } from 'react-router-dom'
import currencyFormatter from "./Utility"


function Cart ({subtotal, itemname, itemcount, cartsub, itemlist}){
    let totalprice = cartsub * 1.08;

    return (
        <div id='cart'>
            <h2>Subtotal: {currencyFormatter.format(cartsub)}</h2>
            <h4>Tax: {currencyFormatter.format(cartsub * 0.08)}</h4>
            <hr></hr>
            <h2>Total Price: {currencyFormatter.format(totalprice)}</h2>
            {/* <li>{itemlist}</li> */}
            <li> Product Count: {itemcount} </li>
            <Link to=""><h3>Buy Now</h3></Link>
        </div>
    )
}
export default Cart;