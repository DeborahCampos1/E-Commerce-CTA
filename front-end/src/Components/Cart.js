import { useState , useEffect} from 'react';
import { Link } from "react-router-dom";


function Cart ({products}){
    const [cartContents, setcartContents] = useState(
        {
            subtotal: 0,
            productPrice: 0,
            productName: "",
        }
    )

    // handleInput=(event )=>{
    //     setcartContents(
    //         {...cartContents, [event.target.id] : event.target.value }
    //     )
    // }
    return (
        <div>
            {/* <h3> Cart Contents </h3> */}
            <h3>Subtotal: {cartContents.subtotal}</h3>
            {/* <h4>Tax: {cartContents.subtotal * 0.08}</h4>
            <h4>Total: {cartContents.subtotal * 1.08}</h4> */}
            <h4><Link to="/products"> Back to All Products</Link></h4>

        </div>
    
    )
}
export default Cart;