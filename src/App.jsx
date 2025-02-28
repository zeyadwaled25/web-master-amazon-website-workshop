import Home from './components/Home/Home'
import NavBar from './authentication/Navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Login from './authentication/Login/Login'
import Register from './authentication/Register/Register'
import ProductsPage from './products/ProductsPage'
import Cart from './components/Cart/Cart'

function App() {
    
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  )
}

export default App