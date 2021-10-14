import React from 'react';
import product from '../Product/Product';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(props.children)

    // const totalReducer = (previous, Product) => previous + Product.price;
    // const total = cart.reduce(totalReducer, 0);

    let totalQuantity = 0;

    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;


    return (
        <div className='order-product'>
            <h2>Order Summary:</h2>
            <h4>Items ordered:{totalQuantity}</h4>
            <p>total:{total.toFixed(2)}</p>
            <p>Shipping:{shipping.toFixed(2)}</p>
            <p className='border'>Tax:{tax.toFixed(2)}</p>
            <p >Grand Total:{grandTotal.toFixed(2)}</p>
            {props.children}


        </div>
    );
};

export default Cart;