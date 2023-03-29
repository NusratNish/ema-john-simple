import React from 'react';
import './Product.css'


const Product = (props) => {
      const {img, name, price, ratings,seller
      }=props.product
      const handelAddToCart =props.handelAddToCart
    return (
        <div className='product'>
         <img src={img} alt="" />
         <div className="product-info">
         <h5> {name}</h5>
         <p>price:{price}$</p>
         <p>Manufacturer:{seller}</p>
         <p>Rating: {ratings}</p>
         </div>
         <button onClick={()=>handelAddToCart(props.product)} className='btn-cart'>Add To Cart </button>
        </div>
    );
};

export default Product;