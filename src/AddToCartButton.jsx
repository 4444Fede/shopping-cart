import React from "react";

function AddToCartButton({ product, addToCart }) {
  function handleAddToCart(){
    addToCart(product);
  };

  return (
    <button
      className="fa-solid fa-plus"
      onClick={handleAddToCart}
    ></button>
  );
}

export default AddToCartButton;

