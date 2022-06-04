import './Cart.css'

const Cart = ({ cart, chooseToCart }) => {

    // cart = { cart }
    console.log(cart)
    return (
        <div className='cart'>
            <h2>Selected Furnitures</h2>
            {
                cart.map((item) => (
                    <h3 key={item.id}>{item.name}</h3>
                ))
            }

            <button onClick={() => chooseToCart(cart)}>
<<<<<<< HEAD
                <p>CHOOSE 1 FOR ME</p>
=======
                <p>Choose one</p>
>>>>>>> 371bcc5 (updated cart)
            </button>
            <br /><br />
            <button>
                <p>CHOOSE AGAIN</p>
            </button>
        </div>
    );
};

export default Cart;