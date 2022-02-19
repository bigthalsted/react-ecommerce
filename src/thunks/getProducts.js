import { getProductsSuccess } from '../actions/getProducts';

const API_URL = 'https://fakestoreapi.com/products?limit=4';

export const getProductsFromAPI = () => async dispatch => {
    try {
      const res = await fetch(API_URL);
      const products = await res.json();
      console.log('products', products)
      dispatch(getProductsSuccess(products))  
    } catch (e) {
      console.error(e)
    }

};
