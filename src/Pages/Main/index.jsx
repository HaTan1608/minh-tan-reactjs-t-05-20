import React, { useState, useContext, useEffect } from "react";
import "./Main.css";
import Layout from "../../components/Layout";
import Content from "../../components/Content";
import ProductItem from "../../components/ProductItem";
import SideBar from "../../components/SideBar";
import dataProduct from '../../product.json'
import { useBgMode } from "../../hooks/useBgMode";
import axios from 'axios'
import store from "../../store";

function Main() {
  const [products, setProducts] = useState([])
  const [productsInCart, setProductsInCart] = useState([])
  const [value, setValue] = useBgMode()


  store.subscribe(() => {
  const stateFromStore = store.getState()
    if(stateFromStore.products) {
      setProducts(stateFromStore.products)
    }
  })

  useEffect(() => {
    store.dispatch({
      type: "GET_PRODUCT_REQUEST"
    })

    async function getProducts() {
      const result = await axios({
        method: 'GET',
        url: 'https://min-shop.herokuapp.com/rest/product'
      })
      // setProducts(result.data.data)
      store.dispatch({
        type: "GET_PRODUCT_SUCCESS",
        data: result.data.data
      })
    }

    getProducts()
  }, [])
  
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

  const onSearch = (value) => {
    const newProductSearch = [...dataProduct.data].filter(item => {
      return item.name.includes(value)
    })



    console.log(newProductSearch)
    setProducts(newProductSearch)

    if(newProductSearch.length > 0) {
      setValue('blue')
    } else {
      setValue('red')
    }

  }

  console.log("products", products)

  return (
    <Layout productsInCart={productsInCart}>
      <main style={{ backgroundColor: value }}>
      <section className="shop-area pt-150 pb-100">
          <div className="container">
            <div className="row">
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
            <SideBar sortNameZA={sortNameZA} sortNameAZ={sortNameAZ} onSearch={onSearch}/>
            </div>
          </div>
        </section>
    </main>
      
    </Layout>
  );
}

export default Main;
