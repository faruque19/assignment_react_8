import React from 'react';
import './OrderCart.css';
// order card area
const OrderCart = (props) => {
    const { cart } = props;
    let total = 0;
    let itemName = '';
    for (const item of cart) {
        total = total + item.price;
        itemName = itemName + ' .' + item.name;
    }
    // load cart data
    return (
        <div className="cart">
            <h1>Order Detail</h1>
            <h2>Order item:{props.cart.length}</h2>
            <h2>Total Item Price:{total}</h2>
            <h3>Order Ttems Name:<ul>{itemName}</ul></h3>
        </div>
    );
};

export default OrderCart;