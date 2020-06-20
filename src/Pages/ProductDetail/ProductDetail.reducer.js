import * as actionTypes from "./ProductDetail.action";
const initiState = {
  data: null,
  loading: false,
  error: null,
};

function ProductDetailReducer(state = initiState, action) {
  switch (action.type) {
    case actionTypes.PRODUCTDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.PRODUCTDETAILT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case actionTypes.PRODUCTDETAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return { ...state };
  }
}
export default ProductDetailReducer;