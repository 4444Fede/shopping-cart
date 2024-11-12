import './App.css';
import Grid from './Grid';
import Cart from './Cart';
import { useState } from 'react';
import CartInterface from './CartInterface';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [CartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const toggleCartInterface = () => {
    setCartOpen(!CartOpen);
  };

  return (
    <>
      <Cart cartItems={cartItems} toggleCartInterface={toggleCartInterface} />
      <Grid addToCart={addToCart} />
      {CartOpen && <CartInterface cartItems={cartItems} toggleCartInterface={toggleCartInterface} />}
    </>
  );
}

export default App;
