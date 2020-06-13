import React, {useState } from "react";

function SideBar(props) {
  const [keyword, setKeyword] = useState()

  const onChangeKeyword = (e) => {
    setKeyword(e.target.value)
  }

  const onSearch = (e) => {
    e.preventDefault()
    props.onSearch(keyword)
  }

  return (
    <>
      {/*SideBar */}
      <div className="col-xl-3 col-lg-4">
        <div className="sidebar-shop">
          <div className="shop-widget">
            <h3 className="shop-title">Search by</h3>
            <form action="#" className="shop-search" onSubmit={onSearch}>
              <input type="text" placeholder="Your keyword...." onChange={onChangeKeyword} />
              <button>
                <i className="fa fa-search" />
              </button>
            </form>
          </div>
          {/* 
                        <div class="shop-widget">
                            <h3 class="shop-title">Filter selection</h3>
                            <div class="price-filter">
                                <div id="slider-range" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 15%; width: 45%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 15%;"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 60%;"></span></div>
                                <input type="text" id="amount">
                            </div>
                        </div> */}
          <div className="shop-widget">
            <h3 className="shop-title">SHOP BY</h3>
            <ul className="shop-link">
              <li>
                <a onClick={props.sortNameAZ}>Name: A-Z</a>
              </li>
              <li>
                <a onClick={props.sortNameZA}>Name: Z-A</a>
              </li>
              <li>
                <a href="#">Price: High to Low</a>
              </li>
              <li>
                <a href="#">Price: Low to High</a>
              </li>
              <li>
                <a href="#">Product: Top Sales</a>
              </li>
            </ul>
          </div>
          <div className="shop-widget">
            <h3 className="shop-title">Recent Product</h3>
            <ul className="shop-sidebar-product">
              <li>
                <div className="side-pro-img">
                  <a href="#">
                    <img src="./assets/shop-rsp3.jpg" alt="" />
                  </a>
                </div>
                <div className="side-pro-content">
                  <div className="side-pro-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>
                    <a href="#">Raglan Baseball-Style</a>
                  </h5>
                  <div className="side-pro-price">
                    <span>$119.00 USD</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="side-pro-img">
                  <a href="#">
                    <img src="./assets/shop-rsp2.jpg" alt="" />
                  </a>
                </div>
                <div className="side-pro-content">
                  <div className="side-pro-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>
                    <a href="#">Raglan Baseball-Style</a>
                  </h5>
                  <div className="side-pro-price">
                    <span>$119.00 USD</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="side-pro-img">
                  <a href="#">
                    <img src="./assets/shop-rsp4.jpg" alt="" />
                  </a>
                </div>
                <div className="side-pro-content">
                  <div className="side-pro-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>
                    <a href="#">Raglan Baseball-Style</a>
                  </h5>
                  <div className="side-pro-price">
                    <span>$119.00 USD</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="shop-widget">
            <div className="shop-sidebar-banner">
              <a href="#">
                <img src="./assets/shop-banner.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* /SideBar */}
    </>
  );
}

export default SideBar;
