import axios from "axios";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export function loginRequestAction() {
  return {
    type: LOGIN_REQUEST,
  };
}
export function loginSuccessAction(token) {
  return {
    type: LOGIN_SUCCESS,
    token,
  };
}
export function loginFailAction(err) {
  return {
    type: LOGIN_FAIL,
    err,
  };
}
export default function loginAccountAction(data) {
 
  return async (dispatch) => {
    dispatch(loginRequestAction());
    try {
      const result = await axios({
        method: "POST",
        url: "https://min-shop.herokuapp.com/rest/user/signIn",
        data,
      });
      localStorage.setItem("token", result.data.accessToken);
      dispatch(loginSuccessAction(result.data.accessToken));
      
      // if (history.location.state.from.pathname) {
      //   history.push(history.location.state.from.pathname);
      // }
      // window.location.reload();
    } catch (err) {
      dispatch(loginFailAction(err));
    }
  };
}