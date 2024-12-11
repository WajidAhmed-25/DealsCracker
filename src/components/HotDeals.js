
import React from 'react';
import pizza from './Hot_Deals/pizza.webp';
import kfc from './Hot_Deals/kfc.jpg';
import broast from './Hot_Deals/broast.webp';
import burger from './Hot_Deals/burger.webp';


const productData = [
  {
    id: 1,
    // badge: { text: "Sale 50%", color: "bg-danger-600" },
    imgSrc: pizza,
    // currentPrice: "$14.99",
    // oldPrice: "$28.99",
    // badgeColor: "bg-danger-600",
  },
  {
    id: 2,
    // badge: { text: "Sale 50%", color: "bg-danger-600" },
    imgSrc: kfc,
    // currentPrice: "$14.99",
    // oldPrice: "$28.99",
  },
  {
    id: 3,
    // badge: { text: "Best Sale", color: "bg-info-600" },
    imgSrc: broast,
    // currentPrice: "$14.99",
    // oldPrice: "$28.99",
  },
  {
    id: 4,
    // badge: { text: "New", color: "bg-warning-600" },
    imgSrc: burger,
    // currentPrice: "$14.99",
    // oldPrice: "$28.99",
  },
];

const HotDeals = () => {
  return (
    <section className="hot-deals pt-80 overflow-hidden">
      <div className="container container-lg">
        <div className="section-heading">
          <div className="flex-between flex-wrap gap-8">
            <h5 className="mb-0 wow bounceInLeft">Hot Deals</h5>
            <div className="flex-align gap-16 wow bounceInRight">
              <a
                href="shop.html"
                className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
              >
                View All Deals
              </a>
              <div className="flex-align gap-8">
                <button
                  type="button"
                  id="deals-prev"
                  className="slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"
                >
                  <i className="ph ph-caret-left"></i>
                </button>
                <button
                  type="button"
                  id="deals-next"
                  className="slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"
                >
                  <i className="ph ph-caret-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="hot-deals-slider arrow-style-two">
          {productData.map((product, index) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-duration={`${200 * (index + 1)}`}
            >
              <div className="product-card h-800 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                {/* <span
                  className={`product-card__badge px-8 py-4 text-sm text-white ${product.badge.color}`}
                >
                  {product.badge.text}
                </span> */}
                <a href="product-details.html" className="product-card__thumb flex-center">
                  <img src={product.imgSrc}/>
                </a>
                <div className="product-card__content p-sm-2 w-100">
                  <div className="product-card__content mt-12">
                    {/* <div className="product-card__price mb-8">
                      <span className="text-heading text-md fw-semibold">
                        {product.currentPrice}{" "}
                        <span className="text-gray-500 fw-normal">/Original Price:</span>
                      </span>
                      <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                        {product.oldPrice}
                      </span>
                    </div> */}
                    <a
                      href="cart.html"
                      className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                    >
                      Add To Cart <i className="ph ph-shopping-cart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotDeals;

