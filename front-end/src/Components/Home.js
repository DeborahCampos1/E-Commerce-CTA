import { Link } from "react-router-dom";

function Home() {
    return (
      <div className="home">
        <h1>Welcome to the Precious Metals Store</h1>
        <h2><Link to="/products">Enter Store</Link></h2>
      </div>
    );
  }
  
  export default Home;
