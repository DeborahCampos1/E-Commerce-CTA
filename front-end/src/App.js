import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react"
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import ProductDetails from "./Components/ProductDetails";
import EditProduct from "./Components/EditProduct";
import NewProductForm from "./Components/NewProductForm";
import PageNotFound from "./Components/PageNotFound";
import AllProducts from "./Components/AllProducts";
import LogIn from "./Components/LogIn";
import Cart from "./Components/Cart";
import Register from "./Register";

function App() {
  const[cartsub, getCartSub] = useState(0)

  const getSubTotal = (cartsub)=>{
    getCartSub(Number(cartsub))
  }


  return (
    <Router>
      <NavBar />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart cartsub={cartsub}/>} />
        <Route path="/products" element={<AllProducts getSubTotal={getSubTotal}/>} />
        <Route path="/products/:id" element={<ProductDetails getSubTotal={getSubTotal} cartsub={cartsub}/>}/>
        <Route path="/products/:id/edit" element={<EditProduct />}/>
        <Route path="/products/new" element={<NewProductForm />}/>
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<PageNotFound />}/>
      </Routes>
      </main>
    </Router>
  );
}

export default App;
