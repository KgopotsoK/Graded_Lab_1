import { categories } from './data';

const SearchBar = ({ 
  searchQuery, 
  onSearchChange, 
  selectedCategory, 
  onCategoryChange, 
  onlyInStock, 
  onStockChange 
}) => {
  return (
    <div style={{
      backgroundColor: '#f5f5f5',
      padding: '15px',
      borderRadius: '5px',
      marginBottom: '20px'
    }}>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="search" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Search by Name:
        </label>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={onSearchChange}
          placeholder="Type product name..."
          style={{
            width: '100%',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        />
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="category" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Filter by Category:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={onCategoryChange}
          style={{
            width: '100%',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      
      <div>
        <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={onlyInStock}
            onChange={onStockChange}
            style={{ marginRight: '8px' }}
          />
          Show only in-stock items
        </label>
      </div>
    </div>
  );
};

export default SearchBar;