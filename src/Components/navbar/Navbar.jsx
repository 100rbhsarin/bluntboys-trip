import './navbar.css'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";



const Navbar = () => {
 
  const { user, LOGOUT} = useContext(AuthContext);




  function handleLogout() {
    axios
      .post("/auth/logout")
      .then(( ) => {
        localStorage.removeItem("user");
      delete axios.defaults.headers.common["access_token"];

      window.location.reload();
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }

  


    return (
      <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">BluntBoys Trip</span>
        </Link>
        {user ? (
  <span>{user.username} 
   <button className="navButton" onClick={handleLogout}>Logout</button>
   </span>

 

) : (
  <div className="navItems">
    <Link to="/register">
    <button className="navButton">Register</button>
    </Link>
    <Link to="/login">
    <button className="navButton">Login</button>
    </Link>
  </div>
 
)}


         
      </div>
    </div>
  );
  }
  
  export default Navbar