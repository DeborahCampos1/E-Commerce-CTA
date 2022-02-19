import { Link } from "react-router-dom";

function NavBar() {
    return (
      <nav id="nav" className="shimmer">
        <h2><Link to="/products">See All Products</Link></h2>
        <h1>Welcome to the Precious Metals Store</h1>
        <h2><Link to="/products/new">Submit New Product</Link></h2>
        
      </nav>
    );
  }
  
  export default NavBar;
