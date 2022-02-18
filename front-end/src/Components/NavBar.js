import { Link } from "react-router-dom";

function NavBar() {
    return (
      <nav id="nav" className="shimmer">
        <h1><Link to="/products">See All Products</Link></h1>
        <h1>Welcome to the Precious Metals Store</h1>
        <h1><Link to="/products/new">Submit New Product</Link></h1>
      </nav>
    );
  }
  
  export default NavBar;
