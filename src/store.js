import { createStore, combineReducers } from 'redux'
import productsReducer from './pages/Main/Main.reducer'
import productDetailReducer from './pages/ProductDetail/ProductDetail.reducer'
import loginReducer from './pages/Login/Login.reducer'
import registerReducer from './pages/Register/Register.reducer'

const store = createStore(
  combineReducers({
    productsReducer, 
    productDetailReducer,
    loginReducer,
    registerReducer
  }),
  {}, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store