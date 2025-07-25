import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <p style={{ textAlign: 'center', color: '#666' }}>No products found matching your criteria.</p>;
  }

  return (
    <div style={{ marginTop: '20px' }}>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;