import { useEffect, useState } from "react";
import './Grid.css';
import AddToCartButton from './AddToCartButton';

function Grid({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=50")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="products-grid">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <h4>{product.title}</h4>
          <hr className="product-description-separator" />
          <p>{product.description}</p>
          <hr className="product-description-separator" />
          <AddToCartButton product={product} addToCart={addToCart} />
        </div>
      ))}
    </div>
  );
}

export default Grid;
