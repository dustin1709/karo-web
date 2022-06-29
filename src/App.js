import { Route, Routes } from "react-router-dom";
import React from "react";
import './App.css';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <main className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
