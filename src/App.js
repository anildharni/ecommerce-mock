import HomePage from "./pages/HomePage/HomePage";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Cart from "./pages/Cart/Cart";
import Category from "./pages/Products/Category/Category";
import Product from "./pages/Products/Product/Product";
import classes from "./index.module.css";


function App() {

  // Our App component holds a HomePage component through which Navbar and Categories components are dispalyed
  // Below the HomePage, UI is rendered appropriately using the React Routes.

  return (
    <>
      <HomePage />
      <Routes>
        <Route path="/" element={<h1 className={classes.container}>Welcome to ZeroZilla</h1>} />
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
        <Route path=':category' element={<Category />} />           {/* All the category wise division can be found here like Products inside Jewelery */}
        <Route path='products/:prodID' element={<Product />} />     {/* Individual products can be found here based on their ID */}
      </Routes>
    </>
  );
}

export default App;
