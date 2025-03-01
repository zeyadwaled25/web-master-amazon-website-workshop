import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './authentication/Login/Login'
import Register from './authentication/Register/Register'
import ProductsPage from './products/ProductsPage'
import AuthContextProvider from './Context/AuthContext'

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App