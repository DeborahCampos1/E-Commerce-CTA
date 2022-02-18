import { Link } from "react-router-dom";

function EditProduct() {
    return (
      <nav className="edit">
        <h1><Link to="/products"> Cancel Edit </Link></h1>
      </nav>
    );
  }
  
  export default EditProduct;
