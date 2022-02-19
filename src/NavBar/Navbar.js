import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { connect } from 'react-redux';
import { getCartQuantity } from '../actions/getCartQuantity'

function Navbar(props) {
  useEffect(() => {
    getCartQuantity();
  },[])

  return (
    <>
      <nav className="navbar">
        <Link to="/shop" className="navbar-shop">
          SHOP
        </Link>
        <Link to="/" className="navbar-logo">
          site-name
        </Link>
        <Link to="/cart" className="navbar-bag">
          CART <span>{props.cartProps.cartCount}</span>
        </Link>
      </nav>
    </>
  );
}

const mapStateToProps = state => ({
  cartProps : state.cartState
});

export default connect(mapStateToProps, { getCartQuantity })(Navbar);
