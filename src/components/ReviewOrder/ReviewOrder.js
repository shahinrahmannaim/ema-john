import React from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import Cart from '../Cart/Cart';


const ReviewOrder = (props) => {
    const {name,img,quantity,seller,price,stock,id}=props.product
    // const cart= props.cart;
    
    return (
        <div className='product'>
            <div className="product-image">
                 <img src={img} alt="" />
            </div>

            <div className="product-details">
                <h4>{name}</h4>
               
                <p><small>by:{seller} </small></p>
                <p><small>Quantity:{quantity} </small></p>
                <p>${price}</p>
            
                <p><small>Only {stock} left in stock </small></p>
                 <button onClick={() => props.removeProduct(id)}  className='main-button' > <FaShoppingCart/> Remove Item </button>
            </div>
            
            {/* <div>
                    <Cart cart={cart} ></Cart>
                </div>
                 */}
        </div>
    );
};

export default ReviewOrder;