import './App.css';
import React, { createContext }  from "react";
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import Manage from './components/Manage/Manage';
import { Routes, Route, Link } from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipmnet';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App(props) {
     const [loggedInUser, setLoggedInUser]= useState({});
  return(
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <h3>Email: {loggedInUser.email} </h3>
              <Header></Header>
        <Routes>
            <Route exact path="/" element={<Shop />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/home" element={<Shop />} />
            <Route path="/order" element={<Order />}/> 
            <Route path="/manage" element={<Manage />}/>  
            <Route path="/login" element={<Login />}/>  
            <Route path="/manage" element={<Manage />}/>  
            <Route   element={<PrivateRoute />}>  
                    <Route  path='/shipment' element={<Shipment/>} />
            </Route>
            <Route path="/product/:productId" element={<ProductDetail />}/>  
            <Route path="*" element={ <NotFound/>}/>  
        </Routes>
    </UserContext.Provider>

  );
   
  
}

export default App;
