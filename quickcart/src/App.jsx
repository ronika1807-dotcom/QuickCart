import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/header';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import CartPage from './components/CartPage';
import CartSidebar from './components/CartSidebar';
import { CartProvider } from './context/CartContext';   // ← IMPORTANT
import { products } from './data/products';
import './styles/App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <CartProvider> {/* Context wrapper */}
      <BrowserRouter>
        <div className="app">

          <Header
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          <main className="main-content">

            <Routes>

              <Route
                path="/"
                element={
                  <HomePage
                    products={products}
                    searchTerm={searchTerm}
                  />
                }
              />

              <Route
                path="/category/:category"
                element={
                  <CategoryPage
                    products={products}
                    searchTerm={searchTerm}  // Added to enable search filtering in categories
                  />
                }
              />

              <Route
                path="/cart"
                element={<CartPage />}
              />

            </Routes>

          </main>

          <CartSidebar />

        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;