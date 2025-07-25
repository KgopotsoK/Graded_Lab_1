export const products = [
  { id: 1, name: "Blue T-Shirt", category: "Clothing", price: "R150", inStock: true },
  { id: 2, name: "Black Jeans", category: "Clothing", price: "R300", inStock: false },
  { id: 3, name: "Red Sneakers", category: "Shoes", price: "R500", inStock: true },
  { id: 4, name: "Wireless Mouse", category: "Accessories", price: "R250", inStock: true },
  { id: 5, name: "Office Chair", category: "Furniture", price: "R1200", inStock: false },
  { id: 6, name: "White Dress Shirt", category: "Clothing", price: "R200", inStock: true },
  { id: 7, name: "Running Shoes", category: "Shoes", price: "R600", inStock: true },
  { id: 8, name: "Leather Belt", category: "Accessories", price: "R180", inStock: false },
];

export const categories = ['All', ...new Set(products.map(product => product.category))];