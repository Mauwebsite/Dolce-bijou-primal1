import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Footer from './components/Footer'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import SearchBar from './components/SearchBar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { assets } from './assets/assets'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
        <Route path="*" element={<Home />} /> 
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
      <a href="https://api.whatsapp.com/send?phone=%2B5491162000494&text=Hola Siani, vengo de ver tu sitio web!" target="_blank">
						<img src={assets.wspplogo} alt="Mi Whatsapp" className="fixed bottom-5 right-2.5 z-1000 w-[85px]" />
			</a>
    </div>
  )
}

export default App
