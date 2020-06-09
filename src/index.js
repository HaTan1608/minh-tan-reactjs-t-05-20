import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './store';
import Loading from './Pages/Loading';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom' 
import ProtectedRoute from './components/ProtectedRoute';
import productData from './product.json'
export const ThemeContext = React.createContext('light');
const Main = React.lazy(() => import('./Pages/Main'))
const Login = React.lazy(() => import('./Pages/Login')) 
const ProductDetail = React.lazy(() => import('./Pages/ProductDetail'))
const Register = React.lazy(() => import('./Pages/Register'))
const NotFoundPage = React.lazy(() => import('./Pages/NotFoundPage'))


store.dispatch({
  type: "GUI_TIEN",
  data: 500000
})
console.log(store.getState())

store.dispatch({
  type: "RUT_TIEN",
  data: 500000
})
console.log(store.getState())

store.dispatch({
  type: "DONG_TAI_KHOAN",
})

console.log(store.getState())


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <ThemeContext.Provider value={'gray'}>
    <React.Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/(login|dang-nhap)" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <ProtectedRoute exact path="/product-detail/:id">
            <ProductDetail />
          </ProtectedRoute>{/* <Route 
        exact 
        path="/product-detail/:id"
        render={(props)=> {
          const product = productData.data.find(elm => elm.id == props.match.params.id)
          if (product){
            return <ProductDetail name={product.name} price={product.price} priceMax={product.priceMax} urlImage={product.imgUrl}/>
          }
          else{
            return <h1>Không tìm thấy sản phẩm</h1>
          }
          }
          }
        /> */}
        <Route exact path="*" component={NotFoundPage}/>
 
      </Switch>
   </React.Suspense>
    </ThemeContext.Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();