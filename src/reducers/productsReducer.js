import { GET_PRODUCTS_SUCCESS } from '../actions/getProducts';

const initialState = {
    products: [],
}

function productsReducer(state = initialState, action) {
    console.log(action)
    switch(action.type) {
        case GET_PRODUCTS_SUCCESS: 
        const { data } = action.payload
            return {
                ...state,
                products: [...data]
            }

        default : 
            return state
    }
}

export default productsReducer  