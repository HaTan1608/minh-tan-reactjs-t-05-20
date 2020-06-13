export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const LOGIN_REQUEST = "LOGIN_REQUEST"
export function loginRequestAction(){
    return{
        type:LOGIN_REQUEST
    }
}
export function loginSuccessAction(token){
    return{
        type:LOGIN_SUCCESS,
        data: token
    }
}
export function loginFailureAction(error){
    return{
        type:LOGIN_FAILURE,
        error:error
        }
}