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
import { connect } from 'react-redux'
import { getProductsAction } from './Main.action'

function Main(props) {
  const [products, setProducts] = useState([])
  const [productsInCart, setProductsInCart] = useState([])
  const [value, setValue] = useBgMode()
  const { getProducts } = props;


  // store.subscribe(() => {
  //   const stateFromStore = store.getState()
  //   if(stateFromStore.productsReducer.products) {
  //     setProducts(stateFromStore.productsReducer.products)
  //   }
  // })

  useEffect(() => {
    if(props.productsListA) {
      setProducts(props.productsListA)
    }
  }, [props.productsListA])

  useEffect(() => {
    getProductsAction()
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

  if(props.loading) {
    return 'loading...'
  }

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

const mapStateToProps = (state) => {
  return {
    productsListA: state.productsReducer.products,
    loading: state.productsReducer.loading
  }
}

// const mapDispatchToProps = {
//   getProducts: getProductsAction
// }

export default connect(mapStateToProps)(Main)