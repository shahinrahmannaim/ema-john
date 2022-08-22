import fakeData from '../../fakeData/products.json';
import React from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetail = () => {
  const{productId} = useParams();
  const product=fakeData.find(pd=>pd.id===productId);
  console.log(product);
    return (
        <div>
            <h1>{productId} Detailsss Comingg sooon!!!</h1>
            <Product removeAddToCart={false} product={product} ></Product>
        </div>
    );
}; 

export default ProductDetail;