import axios from "axios";
import swal from "sweetalert";
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export function registerRequestAction() {
  return {
    type: REGISTER_REQUEST,
  };
}
export function registerSuccessAction(token) {
  return {
    type: REGISTER_SUCCESS,
    token,
  };
}
export function registerFailAction(err) {
  return {
    type: REGISTER_FAIL,
    err,
  };
}
export function registerAccountAction(data) {
  return async (dispatch) => {
    dispatch(registerRequestAction());
    try {
      const result = await axios({
        method: "POST",
        url: "https://min-shop.herokuapp.com/rest/user/signUp",
        // luon luon la data
        data,
      });
      dispatch(registerSuccessAction(result));

      swal({
        title: "Register successfully",
        icon: "success",
        timer: 2000,
        buttons: false,
      });
    } catch (err) {
      console.log(err);

      dispatch(registerFailAction(err));
    }
  };
}