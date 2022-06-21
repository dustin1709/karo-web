import { Route, Routes } from "react-router-dom";
import React from "react";
import './App.css';
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <main className="App">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
