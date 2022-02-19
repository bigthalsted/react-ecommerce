import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './ProductsList.scss';
import Product from '../components/ProductItem/Product';
import { getProductsFromAPI } from '../thunks/getProducts';

 function ProductsList(props) {
  const [products, setProducts] = useState([]);
  console.log('ProductsList Props', props.products)

  useEffect(() => {
    props.getProducts()
  }, [])

  return (
    <div>
      <ul className="products-list">
        {products
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
}

const mapStateToProps = ({productState}) => {
  console.log('state', productState)
  return {
    products: productState.products
  }
}

const mapDispatchToProps = {
   getProducts: getProductsFromAPI
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)
