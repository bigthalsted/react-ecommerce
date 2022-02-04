import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction'

function Navbar(props) {
  console.log(props)

  useEffect(() => {
    getNumbers();
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

export default connect(mapStateToProps, { getNumbers })(Navbar);
