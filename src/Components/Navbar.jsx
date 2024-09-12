import React from "react";
import { Link } from "react-router-dom";



function Navbar(){
 return(
    <>    
    <div className="navbar bg-accent text-white">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Serene Air</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/">Home</Link></li>
      <li><Link to="About">About Us</Link></li>
      <li><Link to="Contact">Contact</Link></li>
      <li><Link to="Service">Services</Link></li>
      {/* <li><Link to="Single">Single</Link></li> */}
    </ul>
  </div>
</div>
    </>
 )   
}


export default Navbar;