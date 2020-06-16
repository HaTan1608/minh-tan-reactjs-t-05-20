import axios from 'axios'
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILURE = "REGISTER_FAILURE"
export const REGISTER_REQUEST = "REGISTER_REQUEST"
export function registerRequestAction(){
    return{
        type:REGISTER_REQUEST
    }
}
export function registerSuccessAction(data){
    return{
        type:REGISTER_SUCCESS,
        data
    }
}
export function registerFailureAction(error){
    return{
        type:REGISTER_FAILURE,
        error:error
        }
}

export default function registerAccountAction(data) {
 
    return async (dispatch) => {
      dispatch(registerRequestAction());
      try {
        const result = await axios({
            method: "POST",
            url: "https://min-shop.herokuapp.com/rest/user/signUp",
            data
        });
        localStorage.setItem("token", result.data.accessToken);
        dispatch(registerSuccessAction(result.data.accessToken));

      } catch (err) {
        dispatch(registerFailAction(err));
      }
    };
  }