export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';

export const getProductsSuccess = (data) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: {
            data
        }
    }
}
export const getProductsFailure = (error) => {
        return {
        type: GET_PRODUCTS_FAILURE,
        payload: {
            error
        }
    }
}
