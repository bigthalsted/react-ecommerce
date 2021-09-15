import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/shop" className="navbar-shop">
            SHOP
          </Link>
          <Link to="/" className="navbar-logo">
            site-name*
          </Link>
          <Link to="/bag" className="navbar-bag">
            BAG
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
