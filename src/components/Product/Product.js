import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, addToCartHandler }) => {
    console.log(product)
    const { img, name, price } = product
    return (
        <div>
            <div className='products'>
                <img src={img} alt="" />
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
            </div>

            <button onClick={() => addToCartHandler(product)} className='add-cart'>
                <p className='btn-cart'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;