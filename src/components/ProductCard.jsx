import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, addToCart, darkmode }) => {
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
      style={{
        backgroundColor: darkmode ? '#333' : '#fff',
        color: darkmode ? '#fff' : '#000'
      }}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      {/* TODO: Implement Add to Cart button functionality */}
      <button data-testid={'product-' + product.id} onClick={() => addToCart(product)} disabled={!product.inStock}>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</button>
    </div>
  )
}

export default ProductCard
