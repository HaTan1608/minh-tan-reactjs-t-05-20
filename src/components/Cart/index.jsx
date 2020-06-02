import React from "react";

export default function Cart(props) {
  return (
    <li className="d-shop-cart">
      <a href="#">
        <i className="fas fa-shopping-cart" />
        <span className="cart-count">{props.data.length}</span>
      </a>
      <ul className="minicart">
        {props.data.map((element) => (
          <li key={element.id}>
            <div className="cart-img">
              <a href="#">
                <img src={element.imageURL} alt="" />
              </a>
            </div>
            <div className="cart-content">
              <h3>
                <a href="#">{element.name}</a>
              </h3>
              <div className="cart-price">
                <span className="new">{element.price}</span>
                <span>
                  <del>{element.priceMax}</del>
                </span>
              </div>
            </div>
            <div className="del-icon">
              <a>
                <i
                  className="far fa-trash-alt"
                  onClick={() => {
                    props.onDelete(element.id);
                  }}
                />
              </a>
            </div>
          </li>
        ))}

        <li>
          <div className="total-price">
            <span className="f-left">Total:</span>
            <span className="f-right">
              {props.data.reduce((totalPrice, product) => {
                return (totalPrice += product.price * product.quantity);
              }, 0)}
            </span>
          </div>
        </li>
        <li>
          <div className="checkout-link">
            <a href="#">Shopping Cart</a>
            <a className="red-color" href="#">
              Checkout
            </a>
          </div>
        </li>
      </ul>
    </li>
  );
}