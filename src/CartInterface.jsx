import React from 'react';
import './CartInterface.css';

function CartInterface({ cartItems, toggleCartInterface }) {
  return (
    <div className="cart-interface-overlay" onClick={toggleCartInterface}>
      <div className="cart-interface" onClick={(e) => e.stopPropagation()}>
        <button onClick={toggleCartInterface} className="close-button">X</button>
        <h4>Carrito</h4>
        {console.log(cartItems)}
        {cartItems.length === 0 ? (
          <p style={color : black;}>El carrito está vacío</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CartInterface;
