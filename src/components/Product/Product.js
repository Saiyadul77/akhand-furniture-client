import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props)
    const { img, name, price } = props.product
    return (
        <div className='products'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <p className='product-price'>Price: ${price}</p>

        </div>
    );
};

export default Product;