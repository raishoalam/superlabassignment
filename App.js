// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import './App.css';

const App = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query); // Update search query based on user input
    };

    return (
        <Router>
            <Navbar onSearch={handleSearch} />
            <div className="content">
                <Routes>
                    <Route path="/" element={<ProductList searchQuery={searchQuery} />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
