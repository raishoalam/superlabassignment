// src/components/Navbar.js
import React, { useState } from 'react';
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchTerm(query);
        onSearch(query);  // Trigger search function in parent component (App.js)
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link className='nav-logos' to="/">sephora</Link>
            </div>
            
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="navbar-links">
                <Link to="/cart"><FaCartPlus className="icon" /></Link>
                <Link to="/notifications"><FaHeart className="icon" /></Link>
            </div>
        </nav>
    );
};

export default Navbar;
