import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Content from "./components/Content";
import ProductItem from "./components/ProductItem";
import SideBar from "./components/SideBar";
import dataProduct from './product.json'


function App() {
  const [products, setProducts] = useState(dataProduct.data)
  const [productsInCart, setProductsInCart] = useState([])
  
  const onSelectProduct = (propsOfProductItem) => {
    console.log(propsOfProductItem)
    setProductsInCart([...productsInCart, propsOfProductItem])

    /* 
      productsInCart = []

      productsInCart.push(propsOfProductItem)

    */
  }
  const sortNameAZ =() => {
    console.log("sortAZ")
    const newProductSort = [...products].sort((a,b) => a.name.localeCompare(b.name))
    setProducts(newProductSort)
  }

  const sortNameZA =() => {
    console.log("sortAZ")
    const newProductSort = [...products].sort((a,b) => b.name.localeCompare(a.name))
    setProducts(newProductSort)
  }

  return (
    <Layout productsInCart={productsInCart}>
      <Content>
        {
          products.map(elm => {
            return (
              <ProductItem 
              {...elm} imageURL={elm.image} 
              onSelectProduct={onSelectProduct}
              />
            )
          })
        }
      </Content>
      <SideBar sortNameZA={sortNameZA} sortNameAZ={sortNameAZ}/>
    </Layout>
  );
}

export default App;
