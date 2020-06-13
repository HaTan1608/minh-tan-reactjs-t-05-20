export const PRODUCT_DETAIL_SUCCESS = "PRODUCT_DETAIL_SUCCESS"
export const PRODUCT_DETAIL_FAILURE = "PRODUCT_DETAIL_FAILURE"
export const PRODUCT_DETAIL_REQUEST = "PRODUCT_DETAIL_REQUEST"
export function detailRequestAction(){
    return{
        type:PRODUCT_DETAIL_REQUEST
    }
}
export function detailSuccessAction(data){
    return{
        type:PRODUCT_DETAIL_SUCCESS,
        data
    }
}
export function detailFailureAction(error){
    return{
        type:PRODUCT_DETAIL_FAILURE,
        error:error
        }
}