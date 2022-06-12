import HomePage from "./pages/HomePage/HomePage";
import React from "react";
import { Routes,Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Cart from "./pages/Cart/Cart";
import Category from "./pages/Products/Category/Category";
import Product from "./pages/Products/Product/Product";
import classes from "./index.module.css";


function App() {

  return (
    <>
      <HomePage />
      <Routes>
        <Route path="/" element={<h1 className={classes.container}>Welcome to ZeroZilla</h1>}/>
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
        <Route path=':category' element={<Category />} />
        <Route path='products/:prodID' element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
