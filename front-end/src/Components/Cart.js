import { useState , useEffect} from 'react';
import currencyFormatter from "./Utility"


function Cart ({subtotal, itemName, itemCount}){
    let totalprice = subtotal * 1.08;

    return (
        <div>
            <h3>Cart Subtotal: {currencyFormatter.format(subtotal)}</h3>
            <h4>Tax: {currencyFormatter.format(subtotal * 0.08)}</h4>
            <h3>Total Price: {currencyFormatter.format(totalprice)}</h3>
            <h3>Item Name: {itemName} Count: {itemCount} </h3>
        </div>
    )
}
export default Cart;