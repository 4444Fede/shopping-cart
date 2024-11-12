import './Cart.css';

function Cart({ cartItems, toggleCartInterface }) {
    return (
        <div className="cart-container">
            <button onClick={toggleCartInterface} className="cart-button fa-solid fa-cart-shopping">
            ({cartItems.length})
            </button>
        </div>
    );
}
export default Cart;
