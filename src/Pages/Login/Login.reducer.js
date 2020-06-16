import * as actionTypes from "../Login/Login.action";
const initalSate = {
  data: null,
  loading: false,
  error: null,
};

function LoginReducer(state = initalSate, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.token,
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
export default LoginReducer;