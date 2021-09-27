import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import OrderCart from '../OrderCart/OrderCart';
import './Items.css'
// items area
const Items = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        // fetch json file  
        fetch('./items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    // order data handlying with handler
    const handleAddToCart = (item) => {
        const newCart = [...cart, item];
        setCart(newCart);
    }
    return (
        <div className="items-container">
            <div className="items">
                {/* dynamic data sent */}
                {
                    items.map(item => <Item
                        key={item.mealId}
                        item={item}
                        handleAddToCart={handleAddToCart}
                    ></Item>)
                }
            </div>
            <div>
                {/* order area */}
                <OrderCart cart={cart}></OrderCart>
            </div>
        </div>
    );
};

export default Items;