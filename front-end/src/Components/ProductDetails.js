import { Link } from "react-router-dom";


function ProductDetails() {
    return (
      <nav className="details">
          <h1>Detail Page!</h1>
        <h3><Link to="/products"> Back to All Products</Link></h3>
      </nav>
    );
  }
  
  export default ProductDetails;
