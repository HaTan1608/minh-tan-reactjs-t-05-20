import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import Content from "../../components/Content";
import Layout from "../../components/Layout";
import ProductItem from "../../components/ProductItem";
import SideBar from "../../components/SideBar";
import { ThemeContext } from "../../index";
import data from "../../product.json";
import Loading from "../Loading";
import { getProductList,sortProductsIncrease,sortProductsDecrease,sortProductsAtoZ,sortProductsZtoA } from "./Main.action";
import "./Main.css";

function App(props) {
  const value = useContext(ThemeContext);

  // state products
  const [productList, setProductsList] = useState([]);
  //add cart
  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    if (props.productsList) {
      setProductsList(props.productsList);
    }
  }, [props.productsList]);

  useEffect(() => {
    props.getProductList();
  }, []);

  const AddProductToCart = (newProduct) => {
    let productCart = {
      id: newProduct.id,
      name: newProduct.name,
      type: newProduct.type,
      price: newProduct.price,
      imageURL: newProduct.imageURL,
      quantity: 1,
    };
    let productUpdate = [...productsInCart];
    let index = productUpdate.findIndex((pd) => pd.id === productCart.id);
    if (index !== -1) {
      productUpdate[index].quantity += 1;
    } else {
      productUpdate.push(productCart);
    }
    setProductsInCart(productUpdate);
  };
  const onHightToLow = () => {
    let newProducts = [...productList];
    props.sortProductsDecrease(newProducts)
  };
  const onLowToHigh = () => {
    let newProducts = [...productList];
    props.sortProductsIncrease(newProducts)
  };
  const onSortAZ = () => {
    let newProducts = [...productList];
    props.sortProductsAtoZ(newProducts)
  };
  const onSortZA = () => {
    let newProducts = [...productList];
    props.sortProductsZtoA(newProducts)
  };
  const onDelete = (productId) => {
    const deleteProduct = [...productsInCart].filter(
      (product) => product.id !== productId
    );
    setProductsInCart(deleteProduct);
  };
  const onSearch = (value) => {
    console.log(value);

    const newProducts = [...data.data].filter((product) => {
      return product.name.includes(value);
    });
    setProductsList(newProducts);
  };
  return (
    <Layout productsInCart={productsInCart} onDelete={onDelete}>
      <main>
        <section className="shop-area pt-150 pb-100">
          <div className="container">
            <div className="row">
              <Content count={productList.length}>
                {productList.map((elm) => {
                  return (
                    <ProductItem
                      {...elm}
                      imageURL={elm.image}
                      onAddProduct={AddProductToCart}
                    />
                  );
                })}
                <Loading />
              </Content>
              <SideBar
                onSort={onHightToLow}
                onSortLow={onLowToHigh}
                onSortAtoZ={onSortAZ}
                onSortZtoA={onSortZA}
                onSearch={onSearch}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
const mapStateToProps = (state) => {
  return {
    productsList: state.productsReducer.products,
  };
};
const mapDispatchToProps = state => ({
  getProductList,
  sortProductsDecrease,
  sortProductsIncrease,
  sortProductsZtoA,
  sortProductsAtoZ
});
export default connect(mapStateToProps, {sortProductsIncrease,sortProductsDecrease,sortProductsAtoZ,sortProductsZtoA,getProductList})(App);