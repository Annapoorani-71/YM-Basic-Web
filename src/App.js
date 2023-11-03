import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Route,Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Products from "./Routes/Products";
import Signup from "./Routes/Signup";
import Services from "./Routes/Services";
import Contact from "./Routes/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
