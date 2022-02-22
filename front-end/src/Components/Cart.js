import { useState , useEffect} from 'react';
import currencyFormatter from "./Utility"


function Cart ({subtotal, itemname, itemcount}){
    // const [cartcontents, setCartContents] = useState({
    //     subtotal: subtotal,
    //     itemname: itemname,
    //     itemcount: itemcount
    // })
    let totalprice = subtotal * 1.08;

    return (
        <div className='cart'>
            <h2>Cart Subtotal: {currencyFormatter.format(subtotal)}</h2>
            <h4>Tax: {currencyFormatter.format(subtotal * 0.08)}</h4>
            <hr></hr>
            <h2>Total Price: {currencyFormatter.format(totalprice)}</h2>
            <li> Product Count: {itemcount} </li>
        </div>
    )
}
export default Cart;