import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Item.css'

const Item = (props) => {
    const { name, price, mealId, img, strArea, strInstructions } = props.item;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    // single item load
    return (
        <div className="item-container">
            <img src={img} alt="" />
            <h2>Meal Name: {name}</h2>
            <h3>ID:{mealId}</h3>
            <h2>StrArea: {strArea}</h2>
            <h2>price:<span>{price}</span></h2>
            <p>{strInstructions}</p>
            <button onClick={() => props.handleAddToCart(props.item)}>{element} add to cart</button>
        </div>
    );
};

export default Item;