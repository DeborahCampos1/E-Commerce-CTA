import { Link } from "react-router-dom";

function NewProduct() {
    return (
      <nav className="new">
          <h1> Welcome to the New Product Page</h1>
        <h1><Link to="/products">All Products</Link></h1>
        <h1><Link to="/products/new">New Product</Link></h1>
      </nav>
    );
  }
  
  export default NewProduct;
