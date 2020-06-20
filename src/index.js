import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "../src/store";
import Loading from "./components/Loading";
import ProtectedRoute from "./components/ProtectedRoute";
import "./index.css";
import PageNotFound from "./pages/404";
import * as serviceWorker from "./serviceWorker";
import App from "./App"; 

const Main = React.lazy(() => import("./pages/Main"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
export const ThemeContext = React.createContext("light");

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.Suspense fallback={<Loading />}>
        <ThemeContext.Provider value="black">
          <Switch>
            
            <Route exact path="/" component={Main} />

            <Route exact path="/(login|dang-nhap)" component={Login} />

            <Route exact path="/(register|dang-ky)" component={Register} />

            <ProtectedRoute
              exact
              path="/(product-detail|chi-tiet-san-pham)/:id"
            >
              <ProductDetail />
            </ProtectedRoute>
            {/* props render */}
            {/* <Route
            exact
            path="/(product-detail|chi-tiet-san-pham)/:id"
            render={(props) => {
              const product = dataProduct.data.find(
                (elm) => elm.id == props.match.params.id
              );
              if (!product) {
                return <PageNotFound />;
              } else {
                return (
                  <ProductDetail
                    name={product.name}
                    price={product.price}
                    priceMax={product.priceMax}
                    brand={product.brand}
                    productCode={product.productCode}
                    rewardPoint ={product.rewardPoint}
                    img={product.image}
                  />
                );
              }
            }}
          /> */}

            <Route>
              <PageNotFound path="*" />
            </Route>
          </Switch>
        </ThemeContext.Provider>
      </React.Suspense>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();