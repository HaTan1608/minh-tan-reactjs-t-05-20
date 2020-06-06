import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Pages/Main';
import Register from './Pages/Register'
import Login from './Pages/Login'
import * as serviceWorker from './serviceWorker';
import ProductDetail from './Pages/ProductDetail'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom' 
import productData from './product.json'
export const ThemeContext = React.createContext('light');

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <ThemeContext.Provider value={'gray'}>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/(login|dang-nhap)">
          <Login/>
        </Route>
        <Route exact path="/register" >
          <Register/>
        </Route>
        <Route exact path="/product-detail/:id">
          <ProductDetail/>
        </Route>
        {/* <Route 
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
        <Route exact path="*">
          <div>404</div>
        </Route>
      </Switch>
   
    </ThemeContext.Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();