import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function NavBar() {
  return (
    <div className="nav-bar">
      <h1>Book Store</h1>
      <div>
        <Link to="/">Books</Link>
        <Link to="/catagories">catagories</Link>
      </div>
    </div>
  );
}

export default NavBar;
