import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Register from "./Routes/Register/Register";
import Login from "./Routes/Login/Login";
import Home from "./Routes/Home/Home";
import Products from "./Routes/Products/Products";
import Navbar from "./Routes/Navbar/Navbar";
import "./App.css";
// import { images } from "../src/components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
