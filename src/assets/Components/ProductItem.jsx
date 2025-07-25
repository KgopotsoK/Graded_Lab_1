const ProductItem = ({ product }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '5px',
      padding: '15px',
      margin: '10px 0',
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <h3 style={{ margin: '0 0 5px 0' }}>{product.name}</h3>
        <p style={{ margin: '0', color: '#666' }}>Category: {product.category}</p>
        <p style={{ margin: '5px 0 0 0', fontWeight: 'bold' }}>{product.price}</p>
      </div>
      <span style={{
        color: product.inStock ? 'green' : 'red',
        fontWeight: 'bold'
      }}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </span>
    </div>
  );
};

export default ProductItem;