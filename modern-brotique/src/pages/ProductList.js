import React from "react";

function ProductList() {
    const products = [
      { id: 1, name: 'Lululemon ABC Pants', price: '$129' },
      { id: 2, name: 'Product 2', price: '$200' },
      { id: 3, name: 'Product 3', price: '$300' },
    ];
  
    return (
      <section>
        <h2>Products</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <ProductDetails product={product} />
            </li>
          ))}
        </ul>
      </section>
    );
  }

  function ProductDetails({ product }) {
    return (
      <div>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <button>Add to Cart</button>
      </div>
    );
  }

export default ProductList;