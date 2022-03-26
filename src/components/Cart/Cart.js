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

            <button>
                <p>CHOOSE 1 FOR ME</p>
            </button>
            <br /><br />
            <button>
                <p>CHOOSE AGAIN</p>
            </button>
        </div>
    );
};

export default Cart;