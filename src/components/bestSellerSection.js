
import React from 'react';
import alkaram1 from './Best_Products/alkaram1.jpg';
import alkaram2 from './Best_Products/alkaram2.jpg';
import alkaram3 from './Best_Products/alkaram3.jpg';
import alkaram4 from './Best_Products/alkaram4.jpg';

const BestSellerSection = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      image: alkaram1,
      originalPrice: 28.99,
      salePrice: 14.99,
      rating: 4.8,
      reviewCount: '17k',
      title: 'Stitched - 2 Pc Cambric Outfit',
      store: 'Alkaram Studio',
    //   soldPercentage: 35,
    //   soldCount: 18,
      totalCount: 35
    },
    {
      id: 2,
      image: alkaram2,
      originalPrice: 28.99,
      salePrice: 14.99,
      rating: 4.8,
      reviewCount: '17k',
      title: 'Stitched - 3 Pc Embroidered Cambric Outfit',
      store: 'Lucky Supermarket',
    //   soldPercentage: 35,
    //   soldCount: 18,
      totalCount: 35
    },
    {
      id: 3,
      image: alkaram3,
      originalPrice: 28.99,
      salePrice: 14.99,
      rating: 4.8,
      reviewCount: '17k',
      title: 'Stitched - 2 Pc Yarn Dyed Outfit',
      store: 'Lucky Supermarket',
    //   soldPercentage: 35,
    //   soldCount: 18,
      totalCount: 35
    },
    {
      id: 4,
      image: alkaram4,
      originalPrice: 28.99,
      salePrice: 14.99,
      rating: 4.8,
      reviewCount: '17k',
      title: 'Stitched - 2 Pc Printed Cotton Silk Outfit',
      store: 'Lucky Supermarket',
    //   soldPercentage: 35,
    //   soldCount: 18,
      totalCount: 35
    }
  ];

  return (
    <section className="best sells pb-80">
      <div className="container container-lg">
        <div className="section-heading">
          <div className="flex-between flex-wrap gap-8">
            <h5 className="mb-0 wow bounceInLeft">Best Products</h5>
          </div>
        </div>

        <div className="row g-12">
          <div className="col-xxl-8">
            <div className="row gy-4">
              {products.map((product, index) => (
                <div 
                  key={product.id} 
                  className="col-md-6" 
                  data-aos="fade-up" 
                  data-aos-duration={index % 2 === 0 ? "200" : "400"}
                >
                  <div className="product-card style-two h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2 flex-align gap-16">
                    <div className="">
                      <span className="product-card__badge  px-8 py-4 text-sm text-white">
                        {/* {product.badge} */}
                      </span>
                      <a href="product-details.html" className="product-card__thumb flex-center">
                        <img src={product.image} alt="" />
                      </a>
                      {/* <div className="countdown" id={`countdown${6 + index}`}>
                        <ul className="countdown-list style-three flex-align flex-wrap">
                          <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                            <span className="days"></span>Days
                          </li>
                          <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                            <span className="hours"></span>Hours
                          </li>
                          <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                            <span className="minutes"></span>Min
                          </li>
                          <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                            <span className="seconds"></span>Sec
                          </li>
                        </ul>
                      </div> */}
                    </div>
                    <div className="product-card__content">
                      <div className="product-card__price mb-16">
                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                          ${product.originalPrice}
                        </span>
                        <span className="text-heading text-md fw-semibold">
                          ${product.salePrice} <span className="text-gray-500 fw-normal"></span>
                        </span>
                      </div>
                      <div className="flex-align gap-6">
                        <span className="text-xs fw-bold text-gray-600">{product.rating}</span>
                        <span className="text-15 fw-bold text-warning-600 d-flex">
                          <i className="ph-fill ph-star"></i>
                        </span>
                        <span className="text-xs fw-bold text-gray-600">({product.reviewCount})</span>
                      </div>
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <a href="product-details.html" className="link text-line-2">
                          {product.title}
                        </a>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">By {product.store}</span>
                      </div>
                      {/* <div className="mt-12">
                        <div 
                          className="progress w-100 bg-color-three rounded-pill h-4" 
                          role="progressbar" 
                          aria-label="Basic example" 
                          aria-valuenow={product.soldPercentage} 
                          aria-valuemin="0" 
                          aria-valuemax="100"
                        >
                          <div 
                            className="progress-bar bg-main-600 rounded-pill" 
                            style={{ width: `${product.soldPercentage}%` }}
                          ></div>
                        </div>
                        <span className="text-gray-900 text-xs fw-medium mt-8">
                          Sold: {product.soldCount}/{product.totalCount}
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
              ))}
            </div>
          </div>

          <div className="col-xxl-4" data-aos="zoom-in" data-aos-duration="600">
            <div className="position-relative rounded-16 bg-light-purple overflow-hidden p-28 z-1 text-center">
              <div className="">
                <img 
                  src="assets/images/bg/special-snacks.png" 
                  alt="" 
                  className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100 cover-img" 
                />
                <div className="d-xxl-block d-none">
                  <img src="assets/images/thumbs/special-snacks-img.png" alt="" />
                </div>
              </div>
              <div className="py-xl-4">
                <h4 className="mb-8">Special Snacks</h4>
                <div className="countdown my-32" id="countdown5">
                  <ul className="countdown-list style-two flex-center flex-wrap">
                    <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium colon-white">
                      <span className="days"></span>Days
                    </li>
                    <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium colon-white">
                      <span className="hours"></span>Hours
                    </li>
                    <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium colon-white">
                      <span className="minutes"></span>Min
                    </li>
                    <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium colon-white">
                      <span className="seconds"></span>Sec
                    </li>
                  </ul>
                </div>
                <a 
                  href="shop.html" 
                  className="mt-16 btn btn-main-two fw-medium d-inline-flex align-items-center rounded-pill gap-8" 
                  tabIndex="0"
                >
                  Shop Now
                  <span className="icon text-xl d-flex">
                    <i className="ph ph-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellerSection;
