import React from "react";

function ProductItem(props) {
  const onAddToCart = () => {
    return props.onAddProduct(props);
  };
  return (
    <>
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="product-wrapper mb-50">
          <div className="product-img mb-25">
            <a href="#">
              <img src={props.image} alt />
            </a>
            <div className="product-action text-center">
              <a title="Shoppingb Cart">
                <i className="fas fa-shopping-cart" onClick={onAddToCart} />
              </a>
              <a href="#" title="Quick View">
                <i className="fas fa-search" />
              </a>
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
                <span>{props.price}</span>
                
                <span className="old-price">{props.disCountPrice}</span>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductItem;