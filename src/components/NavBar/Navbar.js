import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/shop" className="navbar-shop">
          SHOP
        </Link>

        <Link to="/" className="navbar-logo">
          site-name*
        </Link>
        <Link to="/bag" className="navbar-bag">
          BAG 1
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
