import React from "react";
import { Link } from "react-router-dom";

function ProductItem(props) {
  const onAddToCart = () =>  {
    props.onSelectProduct(props)
  }
  return (
    <div className="col-xl-4 col-lg-6 col-md-6">
      <div className="product-wrapper mb-50">
        <div className="product-img mb-25">
          <a href="#">
            <img src={props.imageURL} alt="" />
          </a>
          <div className="product-action text-center">
            <a title="Shopping Cart" onClick={onAddToCart}>
              <i className="fas fa-shopping-cart" />
            </a>
            <Link to={`/product-detail/${props.id}`} title="Quick View">
              <i className="fas fa-search" />
            </Link>
          </div>
        </div>
        <div className="product-content pr-0">
          <div className="pro-cat mb-10">
            <a href="#">{props.type}</a>
          </div>
          <h4>
            <a href="#">{props.name}</a>
          </h4>
          <div className="product-meta">
            <div className="pro-price">
              <span>{props.discountPrice}</span>
              <span className="old-price">{props.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
