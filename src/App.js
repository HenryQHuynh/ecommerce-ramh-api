import React from 'react'
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Register from './Routes/Register/Register';
import Login from "./Routes/Login/Login";
import Home from "./Routes/Home/Home";
import Products from "./Routes/Products/Products";
import './App.css';


function App() {

  return (
    <div className="App">
      <nav className="main-nav">
        <Link to="/Register">Register</Link> {" "}
        <Link to="/Login">Login</Link> {" "}
        <Link to="/Home">Home</Link> {" "}
        <Link to="/Products">Products</Link>
      </nav>

      <Routes>
        <Route path="Register" element={<Register />} />
        <Route path="Login" element={<Login />} />
        <Route path="Home" element={<Home />} />
        <Route path="Products" element={<Products />} />
        <Route
          path="*"
          element=
          {<Home />}
        />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
