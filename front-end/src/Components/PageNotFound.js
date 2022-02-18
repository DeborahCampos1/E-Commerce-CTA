import { Link } from "react-router-dom";


function PageNotFound (){
    return (
        <div>
            <h3> Page Not Found </h3>
            <h4><Link to="/products"> Back to All Products</Link></h4>

        </div>
    
    )
}
export default PageNotFound;