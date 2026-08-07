import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [darkmode, setDarkmode] = useState(false)

  const [cart, setCart] = useState([])

  // TODO: Implement state for category filtering

  function handleAddToCart(product) {
    setCart((prevCart) => [...prevCart, product])
  }

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle 
        darkMode={darkmode}
        setDarkMode={setDarkmode}
      />

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList addToCart={handleAddToCart} />

      <Cart cart={cart}/>
    </div>
  )
}

export default App
