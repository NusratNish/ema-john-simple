import React from 'react';
import './Product.css'

const Product = (props) => {
      const {img, name, price, ratings,seller
      }=props.product
     
    return (
        <div className='product'>
         <img src={img} alt="" />
         <div className="product-info">
         <h5> {name}</h5>
         <p>price:{price}$</p>
         <p>Manufacturer:{seller}</p>
         <p>Rating: {ratings}</p>
         </div>
         <button className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;