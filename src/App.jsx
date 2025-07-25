// src/App.jsx
import { useState } from 'react';
import { products, categories } from './assets/Components/data';
import SearchBar from './assets/Components/SearchBar';
import ProductList from './assets/Components/ProductList';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [onlyInStock, setOnlyInStock] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesStock = !onlyInStock || product.inStock;
    return matchesSearch && matchesCategory && matchesStock;
  });

  return (
    <div style={{
      backgroundColor: '#f5f0ff',  // Soft lavender background
      minHeight: '100vh',
      padding: '20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '25px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(149, 117, 205, 0.1)' // Lavender shadow
      }}>
        <h1 style={{ 
          color: '#6a4c93',  // Deep lavender
          textAlign: 'center',
          marginBottom: '25px',
          fontWeight: '600'
        }}>
          ShopEasy Product Catalogue
        </h1>
        
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={(e) => setSearchQuery(e.target.value)}
          selectedCategory={selectedCategory}
          onCategoryChange={(e) => setSelectedCategory(e.target.value)}
          onlyInStock={onlyInStock}
          onStockChange={(e) => setOnlyInStock(e.target.checked)}
        />
        
        <div style={{ 
          backgroundColor: '#faf9ff',  // Very light lavender
          padding: '20px',
          borderRadius: '8px',
          marginTop: '20px'
        }}>
          <h2 style={{ 
            marginTop: '0',
            color: '#6a4c93'  // Matching header color
          }}>
            {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'} Found
          </h2>
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default App;