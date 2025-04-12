import React, { useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";

const ItemList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      img: "/img/smartwatch.jpeg",
      name: "SmartWatch",
      price: 100000,
      category: "Electronics"
    },
    {
      id: 2,
      img: "/img/chair.jpeg",
      name: "Chair",
      price: 1000,
      category: "Furniture"
    },
    {
      id: 3,
      img: "/img/t-shit.jpeg",
      name: "T-shirt",
      price: 20000,
      category: "Clothes"
    }
  ]);

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      img: "/img/lap.jpeg",
      name: `Product ${products.length + 1}`,
      price: 999,
      category: "Electronics"
    };
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = (indexToDelete) => {
    const updated = products.filter((_, index) => index !== indexToDelete);
    setProducts(updated);
  };

  return (
    <div className='itemlist' style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Array of Items</h2>
      <button className='add' onClick={handleAddProduct}>Add Product</button>
      <div className='item-main'>
        <ul style={{ listStyle: 'none', padding: 0, }}>
          {products.map((product, index) => (
            <li key={product.id} style={{ border: '1px solid gray', padding: '10px' }}>
              <img src={product.img} alt={product.name} width="150" height="150" />
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
              <p>Category: {product.category}</p>
              <button className='delete' onClick={() => handleDeleteProduct(index)}>
                Delete <RiDeleteBin6Line size={20} color="white" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemList;
