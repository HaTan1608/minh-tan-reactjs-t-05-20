import axios from "axios";
export const PRODUCTLIST_REQUEST = "PRODUCTLIST_REQUEST";
export const PRODUCTLIST_SUCCESS = "PRODUCTLIST_SUCCESS";
export const PRODUCTLIST_FAIL = "PRODUCTLIST_FAIL";
export const ORDER_PRODUCT_PRICE_INCREASE = "ORDER_PRODUCT_PRICE_INCREASE";
export const ORDER_PRODUCT_PRICE_DECREASE = "ORDER_PRODUCT_PRICE_DECREASE";
export const ORDER_PRODUCT_ATOZ = "ORDER_PRODUCT_ATOZ";
export const ORDER_PRODUCT_ZTOA = "ORDER_PRODUCT_ZTOA";
export function productsListRequestAction() {
  return {
    type: PRODUCTLIST_REQUEST,
  };
}
export function productsListSuccessAction(data) {
  return {
    type: PRODUCTLIST_SUCCESS,
    data,
  };
}
export function productsListFailAction(err) {
  return {
    type: PRODUCTLIST_FAIL,
    err,
  };
}
export function getProductList() {
  return async (dispatch) => {
    dispatch(productsListRequestAction());
    try {
      const resutl = await axios({
        method: "GET",
        url: "https://min-shop.herokuapp.com/rest/product",
      });
      dispatch(productsListSuccessAction(resutl.data.data));
      
    } catch (err) {
      dispatch(productsListFailAction(err));
    }
  };
}

export const sortProductsIncrease = (products) => (dispatch) => {
  products.sort((a,b)=>(a.price  < b.price ? -1 : 1))
  return dispatch({
    type: ORDER_PRODUCT_PRICE_INCREASE,
    data:{
      items:products
    }
  })
}

export const sortProductsDecrease = (products) => (dispatch) => {
  products.sort((a,b)=>(a.price > b.price ? -1 : 1))
  return dispatch({
    type: ORDER_PRODUCT_PRICE_DECREASE,
    data:{
      items:products
    }
  })
}

export const sortProductsAtoZ = (products) => (dispatch) => {
  products.sort((a, b) =>
  a.name.toLowerCase().localeCompare(b.name.toLowerCase())
);

  return dispatch({
    type: ORDER_PRODUCT_ATOZ,
    data:{
      items:products
    }
  })
}

export const sortProductsZtoA = (products) => (dispatch) => {
    products.sort((a, b) =>
    b.name.toLowerCase().localeCompare(a.name.toLowerCase()));
  return dispatch({
    type: ORDER_PRODUCT_ZTOA,
    data:{
      items:products
    }
  })
}


















