import * as actionTypes from "./Register.action";
const initialState = {
  data: null,
  loading: false,
  error: null,
};

function RegisterReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.token,
      };
    case actionTypes.REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
export default RegisterReducer;