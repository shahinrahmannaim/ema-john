import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/fakedb';
import  fakeData  from '../../fakeData/products.json';
import  happyImage  from '../../images/giphy.gif';
import './Order.css'
import ReviewOrder from '../ReviewOrder/ReviewOrder';
import Cart from '../Cart/Cart';
import { useNavigate } from 'react-router-dom';
function Order() {
    const [cart, setCart] = useState([]);
    // const [orderPlacd, setOrderPlaced] = useState(false);
  const navigate=useNavigate()

    const  handleChekout = ()=>{
        navigate('/shipment')
    }


    const removeProduct=(productkeys)=>{
        const newCart= cart.filter(pd=>pd.id !== productkeys);
        console.log(newCart);
        setCart(newCart);
        removeFromDatabaseCart(productkeys);
    }

    useEffect(() => {
     const savedCarts= getDatabaseCart();
     const productKeys = Object.keys(savedCarts);
     const cartProducts =productKeys.map(key=>{
        const product =  fakeData.find(pd=>pd.id===key);
        product.quantity=savedCarts[key];
        return product;
     });
     console.log(cartProducts);
    setCart(cartProducts);
       
    }, []);
    return (

        <div className='twin-container'>
        <div className="product-container">
       
                     {
                        cart.map(pd=>
                            <ReviewOrder  key={pd.id} product={pd}  removeProduct={removeProduct} ></ReviewOrder>
                            )
                    } 
                    {/* {   thankyou      } */}
       
        </div>
        <div className='cart-container'>
            <Cart cart={cart} >
                        <button onClick={handleChekout} className='main-button' >Proceed Chekout</button>
            </Cart> 
                
        </div>
        
        </div>


    );
}

export default Order;