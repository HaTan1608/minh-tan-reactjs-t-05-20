import React from 'react';
import './App.css';

function Image(props){
  return (
    <img src={props.urlImage}/>
  )
}
function ProductName(props){
  return (
    <p>{props.nameProduct}</p>
  )
}
function ProductPrice(props){
  return (
    <p>{props.priceProduct}</p>
  )
}
function Product(props){
  return(
  <>
  <Image urlImage={props.image}/>
  <ProductName nameProduct={props.name}/>
  <ProductPrice priceProduct={props.price}/>
  </>
  )
}
function App() {
  return (
    <div>
        <Product image="https://media3.scdn.vn/img4/2020/03_04/https://media3.scdn.vn/img4/2020/03_25/hxsrIvG6TlugHH1QNxG1_simg_b5529c_250x250_maxb.jpg.jpg" name="Hạt điều" price="50000"/>
    </div>
  );
}

export default App;
