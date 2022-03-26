import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    return (
        <div className='cart'>
            <h3>Selected Furnitures</h3>
            {cart.map((item) => (
                <h1 key={item.id}>{item.name}</h1>
            ))
            }

            {/* <p>{name}</p> */}
        </div>
    );
};

export default Cart;