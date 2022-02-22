import { Link } from "react-router-dom";

function NavBar() {
    return (
      <nav id="nav" className="shimmer">
        <h3><Link to="/products/new">Submit New Product</Link></h3>
        <h2>Welcome to the Precious Metals Store</h2>
        <h3><Link to="/products">See All Products</Link></h3>
        
      </nav>
    );
  }
  
  export default NavBar;
