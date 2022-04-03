import React from 'react';
import { Link } from 'react-router-dom';
import '../Layouts/Stysles.css';
 
const Navbar=()=>{
    return(
        
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container-fluid">
        <a className="navbar-brand" ><b>Product</b></a>
         
           
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
            <ul className="navbar-nav me-auto mb-6 lmnbvgc mb-lg-0">
              <li className="nav-item" >
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link class="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
               <li className="nav-item">
                <Link class="nav-link active" aria-current="page" to="/contacts">contacts</Link>
              </li>
               
               
            </ul>
            <Link className="btn btn-warning" to="/Items/add" >Add Item</Link>
          </div>
           
        </div>
         
      </nav>
      
    )
}
export default Navbar;