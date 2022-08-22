import React, { useContext, useState } from 'react';
// import React from 'react';
import logo from   '../../images/logo.png';
import logos from   '../../images/favicon.ico';
import  './Header.css';
import {FaShoppingCart} from 'react-icons/fa';
import {Navigate, NavLink, useNavigate, useLocation} from 'react-router-dom';
import { UserContext } from '../../App';
import { handleSignedOut } from '../Login/LoginManager';



const Header = (props) => {
     const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    
    return (
        <div>
            <div className="header">
            <img src={logo} alt="" />
         
            </div>
        <nav>
               <div className="logoSection">
                    <NavLink to="/home"> <img src={logos} alt=""  /> </NavLink>
               </div>
              <div className="navSection">
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/order">Order</NavLink>
                    <NavLink to="/manage">Manage Inventory</NavLink>
                    <NavLink to="/search"><input type="search" placeholder='Search' /></NavLink> 
                    <button onClick={()=>{setLoggedInUser({})}} >Sign out</button>   
                   
                   


                   
                    <NavLink to="/register">Register</NavLink>
                    <NavLink className='cart-logo' to="/cart"><FaShoppingCart/><span>{0}</span></NavLink>                                   
              </div>
          
         </nav>
        </div>
    );
};

export default Header;