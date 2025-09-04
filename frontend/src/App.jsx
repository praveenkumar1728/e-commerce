import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
// import './Font.css'

import { Routes,Route,Link } from "react-router-dom";


// Components 
import Header from './components/Header'
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

// Pages 
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

import { useState } from "react";
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
function App() {

  const [cartItems,setCartItems] = useState([])


  return (
    <>
        <ToastContainer position="top-right" autoClose={3000} theme='dark' />
      <div className="app">
        
        <Header cartItems={cartItems}/>
        <Sidebar/>

        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/about" element={<About/>} ></Route>
          <Route path="/shop" element={<Shop/>} ></Route>
          <Route path="/blog" element={<Blog/>} ></Route>
          <Route path="/contact" element={<Contact/>} ></Route>
          <Route path="/login" element={<Login/>} ></Route>
          <Route path="/register" element={<Register/>} ></Route>
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} ></Route>
          <Route path="/search" element={<Home/>} ></Route>
          <Route path="/product/:id" element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems}/>} ></Route>
        </Routes>


        <Footer/>
      </div>
    </>
  )
}

export default App
