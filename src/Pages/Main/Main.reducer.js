const initState = {
  products: [],
  loading: false,
  error: null
}

function ProductReducer(state = initState, action) {
  switch(action.type) {
    case 'GET_PRODUCT_REQUEST':
      return {
        ...state,
        loading: true
      }

    case 'GET_PRODUCT_SUCCESS':
      return {
        ...state,
        loading: false,
        products: action.data
      }

    default:
      return state
  }
}

export default ProductReducer