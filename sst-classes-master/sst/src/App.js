import React, { useState } from 'react';

const App = () => {
  const [categories] = useState(['Electronics', 'Books', 'Clothing', 'Furniture']);
  const [products] = useState([
    { id: 1, name: 'Laptop', category: 'Electronics' },
    { id: 2, name: 'Smartphone', category: 'Electronics' },
    { id: 3, name: 'Tablet', category: 'Electronics' },
    { id: 4, name: 'Science Fiction Book', category: 'Books' },
    { id: 5, name: 'Cookbook', category: 'Books' },
    { id: 6, name: 'T-Shirt', category: 'Clothing' },
    { id: 7, name: 'Jeans', category: 'Clothing' },
    { id: 8, name: 'Jacket', category: 'Clothing' },
    { id: 9, name: 'Sofa', category: 'Furniture' },
    { id: 10, name: 'Dining Table', category: 'Furniture' },
    { id: 11, name: 'Chair', category: 'Furniture' },
    { id: 12, name: 'Bookshelf', category: 'Furniture' },
  ]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      <h1>Product Categories</h1>
      <div>
        <button onClick={() => handleCategoryClick('All')}>All</button>
        {categories.map(category => (
          <button key={category} onClick={() => handleCategoryClick(category)}>
            {category}
          </button>
        ))}
      </div>
      <h2>Products</h2>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
