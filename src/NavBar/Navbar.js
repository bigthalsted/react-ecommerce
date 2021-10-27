import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import getNumbers from '../redux/actions/getAction';
import { connect } from 'react-redux';
import './Navbar.scss';

function Navbar(props) {

useEffect(() => {
    getNumbers();
}, [])

  return (
    <>
      <nav className="navbar">
        <Link to="/shop" className="navbar-shop">
          SHOP
        </Link>
        <Link to="/" className="navbar-logo">
          site-name*
        </Link>
        <Link to="/cart" className="navbar-bag">
          CART <span>{props.basketProps.basketNumbers}</span>
        </Link>
      </nav>
    </>
  );
}

const mapStateToProps = state => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { getNumbers })(Navbar);
