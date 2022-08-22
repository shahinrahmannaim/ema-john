import {FaShoppingCart} from 'react-icons/fa';
import React from 'react';


const Cart = (props) => {
    let cart= props.cart;
    // const total =cart.reduce((total,prd)=>total+prd.price,0);
    let total =0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total=total+product.price * product.quantity;
    }

    let shipping = 0;
    if (total > 35) {
        shipping= 0;
    }else if(total>15){
        shipping=4.99;
    }else if(total>0){
        shipping=12.99;
    }
    const tva= total/10;
    const grandTotal= (total+shipping+tva);
    const formatNumber=num=>{
       const precision= num.toFixed(2);
       return Number(precision);
    }
    return (
        <div>
            <h3>This is Cart: </h3>
        <h5>Cart summery: Items  {cart.length} </h5>

        <p>Product Price: {formatNumber(total)} </p>
        <p>Shipping cost : ${shipping} </p>
        <p>TVA:${formatNumber(tva)} </p>
        <p>Total price : ${formatNumber(grandTotal)}</p>
        {props.children}
        </div>
        
         
        
    );
};

export default Cart;