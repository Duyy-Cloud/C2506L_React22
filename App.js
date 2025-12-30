import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/products" element={<ProductsList />} />
      </Routes>
    </Router>
  );
}

export default App;
