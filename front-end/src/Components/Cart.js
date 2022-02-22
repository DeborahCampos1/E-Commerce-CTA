import { useState , useEffect} from 'react';
import { Link } from 'react-router-dom'
import currencyFormatter from "./Utility"


function Cart ({subtotal, itemname, itemcount}){
    let totalprice = subtotal * 1.08;

    return (
        <div id='cart'>
            <h2>Subtotal: {currencyFormatter.format(subtotal)}</h2>
            <h4>Tax: {currencyFormatter.format(subtotal * 0.08)}</h4>
            <hr></hr>
            <h2>Total Price: {currencyFormatter.format(totalprice)}</h2>
            <li> Product Count: {itemcount} </li>
            <Link to=""><h3>Buy Now</h3></Link>
        </div>
    )
}
export default Cart;