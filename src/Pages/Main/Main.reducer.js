import * as actionTypes from "./Main.action.js";
const initState = {
  products: [],
  loading: false,
  error: null,
};

function ProductReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.PRODUCTLIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.PRODUCTLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.data,
      };
    case actionTypes.PRODUCTLIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
      case actionTypes.ORDER_PRODUCT_PRICE_INCREASE:
      return {
        ...state,
        products: action.data.items, 
      };
      case actionTypes.ORDER_PRODUCT_PRICE_DECREASE:
      return {
        ...state,
        products: action.data.items, 
      };
      case actionTypes.ORDER_PRODUCT_ATOZ:
      return {
        ...state,
        products: action.data.items
      };
      case actionTypes.ORDER_PRODUCT_ZTOA:
      return {
        ...state,
        products: action.data.items
      };
    default:
      return state;
  }
}

export default ProductReducer;