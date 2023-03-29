import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(cart)
    let total = 0;
    let totalShipping =0;
    for(const product of cart){
        total = total+ product.price;
        totalShipping = totalShipping + product.shipping
    }
    const tax = total*7/100
    const grandTotal = total + totalShipping +tax

    return (
        <div className='cart-compo'>
            <h4>Product Summary</h4>
            <h5>selected item : {cart.length}</h5>
            <p>Total Price: {total}$</p>
            <p>Shipping Charge: {totalShipping}$</p>
            <p>Tax:{tax.toFixed(2)}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)}$</h5>

        </div>
    );
};

export default Cart;