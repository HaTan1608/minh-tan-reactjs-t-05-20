import { createStore, combineReducers , applyMiddleware ,compose} from 'redux'
import productsReducer from './pages/Main/Main.reducer'
import productDetailReducer from './pages/ProductDetail/ProductDetail.reducer'
import loginReducer from './pages/Login/Login.reducer'
import registerReducer from './pages/Register/Register.reducer'
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
const store = createStore(
  combineReducers({
    productsReducer, 
    productDetailReducer,
    loginReducer,
    registerReducer
  }),
  {}, 
  composeWithDevTools(applyMiddleware(thunk))
)

export default store