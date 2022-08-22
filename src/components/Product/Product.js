import {FaShoppingCart} from 'react-icons/fa';

import React from 'react';
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props)
    const myStyle={
        textDecoration: 'none'
    }

    const {img,name,seller,price,stock,id}=props.product;
    return (
        <div className='product'>
            <div className="product-image">
                 <img src={img} alt="" />
            </div>

            <div className="product-details">
                <h4><Link style={myStyle} to={"/product/"+id}>{name}</Link> </h4>
               
                <p><small>by:{seller} </small></p>
                <p>${price}</p>
            
                <p><small>Only {stock} left in stock </small></p>
                { props.removeAddToCart && <button  className='main-button' onClick={()=>props.handleAddProduct(props.product) } > <FaShoppingCart/> Add to Cart </button>}
            </div>
        </div>
    );
};

export default Product;