import React from "react";

const ProductCard = ({ nome, preco, onAddToCart }) => {
  return (
    <div>
      <h2>{nome}</h2>
      <p>Preço:{preco}</p>
      <button onClick={onAddToCart}>Adicionar ao carrinho</button>
    </div>
  );
};

export default ProductCard;
