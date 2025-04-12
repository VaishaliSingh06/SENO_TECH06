import React from 'react';
import { Link } from 'react-router-dom';
import '../';

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <ul>
      <h2 className="logo">🤖SENOTECH</h2>
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/about">ℹ️ AboutUS</Link></li>
        <li><Link to="/contact">📞 Contact</Link></li>
        <li><Link to="/product-list">🛒 Product List</Link></li>
        <li><Link to="/profile">👤 Profile</Link></li>
        <li><Link to="/change-text">✍️ Change Text</Link></li>
        <li><Link to="/toggle">🎚️ Toggle Button</Link></li>
        <li><Link to="/items">📋 Item List</Link></li>
        <li><Link to="/add-numbers">➕ Add Numbers</Link></li>
        <li><Link to="/form">📝 Form Display</Link></li>
        <li><Link to="/key-press">⌨️ Key Press</Link></li>
        <li><Link to="/counter">🔢 Counter</Link></li>
        <li><Link to="/context-demo">👥 Context Demo</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
