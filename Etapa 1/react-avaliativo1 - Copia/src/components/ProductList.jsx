import React, { useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");
  const [editingPrice, setEditingPrice] = useState("");

  // Adicionar Produto
  const addProduct = () => {
    if (name.trim() === "" || price.trim() === "") return;
    setProducts([...products, { id: Date.now(), name, price: parseFloat(price) }]);
    setName("");
    setPrice("");
  };

  // Iniciar Edição
  const startEditing = (id, currentName, currentPrice) => {
    setEditingId(id);
    setEditingName(currentName);
    setEditingPrice(currentPrice.toString());
  };

  // Salvar Alterações
  const saveEdit = () => {
    setProducts(
      products.map((product) =>
        product.id === editingId
          ? { ...product, name: editingName, price: parseFloat(editingPrice) }
          : product
      )
    );
    setEditingId(null);
    setEditingName("");
    setEditingPrice("");
  };

  // Excluir Produto
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Gerenciar Produtos</h2>

      {/* Adicionar Produto */}
      <div>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Nome do produto"
        />
        <input
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          placeholder="Preço"
        />
        <button onClick={addProduct}>Adicionar Produto</button>
      </div>

      {/* Listagem de Produtos */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ margin: "10px 0" }}>
            {editingId === product.id ? (
              <>
                <input
                  type="text"
                  value={editingName}
                  onChange={(event) => setEditingName(event.target.value)}
                />
                <input
                  type="number"
                  value={editingPrice}
                  onChange={(event) => setEditingPrice(event.target.value)}
                />
                <button onClick={saveEdit}>Salvar</button>
              </>
            ) : (
              <>
                {product.name} - R${product.price.toFixed(2)}
                <button
                  onClick={() =>
                    startEditing(product.id, product.name, product.price)
                  }
                >
                  Editar
                </button>
                <button onClick={() => deleteProduct(product.id)}>Excluir</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;