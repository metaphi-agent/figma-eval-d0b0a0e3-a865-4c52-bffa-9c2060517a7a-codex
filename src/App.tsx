import { Navigate, Route, Routes } from 'react-router-dom'

import { Lazy404 } from './pages/Lazy404'
import { LazyAbout } from './pages/LazyAbout'
import { LazyAccount } from './pages/LazyAccount'
import { LazyAccountDropdown } from './pages/LazyAccountDropdown'
import { LazyCart } from './pages/LazyCart'
import { LazyCategoryDropdown } from './pages/LazyCategoryDropdown'
import { LazyCheckout } from './pages/LazyCheckout'
import { LazyContact } from './pages/LazyContact'
import { LazyHome } from './pages/LazyHome'
import { LazyLogin } from './pages/LazyLogin'
import { LazyProductDetails } from './pages/LazyProductDetails'
import { LazySignup } from './pages/LazySignup'
import { LazyWishlist } from './pages/LazyWishlist'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LazyHome />} />
      <Route path="/home" element={<Navigate to="/" replace />} />

      <Route path="/category-dropdown" element={<LazyCategoryDropdown />} />
      <Route path="/account-dropdown" element={<LazyAccountDropdown />} />

      <Route path="/login" element={<LazyLogin />} />
      <Route path="/signup" element={<LazySignup />} />

      <Route path="/wishlist" element={<LazyWishlist />} />
      <Route path="/cart" element={<LazyCart />} />
      <Route path="/checkout" element={<LazyCheckout />} />
      <Route path="/product-details" element={<LazyProductDetails />} />

      <Route path="/account" element={<LazyAccount />} />
      <Route path="/contact" element={<LazyContact />} />
      <Route path="/about" element={<LazyAbout />} />

      <Route path="/404" element={<Lazy404 />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  )
}

