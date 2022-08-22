import './Shop.css';
import fakeData from '../../fakeData/products.json';
import React, {useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';



const Shop = () => {
    const first10 = fakeData.slice(0,10) 
    const [products,setProducts] = useState(first10);
    const [cart,setCart]=useState([]);

        useEffect(() => {
          const savedCart= getDatabaseCart();
          const productIds= Object.keys(savedCart);
          const previasCart= productIds.map(pdIds=>
            {
                const product=fakeData.find(pd=>pd.id===pdIds);
                product.quantity= savedCart[pdIds]
                console.log(pdIds,savedCart[pdIds])
                return product;
            } )

            setCart(previasCart);
        }, [])
        

    const handleAddProduct=(product)=>{
        const addProductKey = product.id;
        const sameProduct=cart.find(pd=>pd.id===product.id);
        let count =1;
        let newCart;
            if (sameProduct) {
                const count = sameProduct.quantity+1;
                sameProduct.quantuty=count;
                const others= cart.filter(pd=>pd.id !== addProductKey);
                newCart=[...others,sameProduct];
            }
            else{
                product.quantity=1;
                newCart=[...cart,product]
            }
        setCart(newCart);
        addToDatabaseCart(product.id,count);
    }
    return ( 
       <div className='twin-container'>
        <div className="product-container">
       
            {
                products.map(pd=> <Product key={pd.id} removeAddToCart={true} handleAddProduct={handleAddProduct} product={pd}></Product>)
            }
       
        </div>
        <div className='cart-container'>
            <Cart cart={cart} >
            <Link to={"/order"} ><button className='main-button' > <FaShoppingCart /> Review Order</button></Link>

            </Cart>
        </div>
        
        </div>
    );
}

export default Shop;