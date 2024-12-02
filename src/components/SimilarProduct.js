import React, { useEffect,useState } from 'react';
import Slider from 'react-slick';

const SimilarProduct = () => {
    const [nav1, setNav1] = useState(null);
    const settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 1500,
        dots: false,
        pauseOnHover: true,
        arrows: true,
        draggable: true,
        rtl: document.documentElement.dir === 'rtl',
        infinite: true,
        nextArrow: <button id="new-arrival-next">Next</button>,
        prevArrow: <button id="new-arrival-prev">Prev</button>,
        responsive: [
          {
            breakpoint: 1599,
            settings: {
              slidesToShow: 6,
              arrows: false,
            }
          },
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 4,
              arrows: false,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              arrows: false,
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 2,
              arrows: false,
            }
          },
          {
            breakpoint: 424,
            settings: {
              slidesToShow: 1,
              arrows: false,
            }
          },
        ]
      };
  return (
    <section class="new-arrival pb-80">
    <div class="container container-lg">
        <div class="section-heading">
            <div class="flex-between flex-wrap gap-8">
                <h5 class="mb-0">You Might Also Like</h5>
                <div class="flex-align gap-16">
                    <a href="shop.html" class="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline">All Products</a>
                    <div class="flex-align gap-8">
                        <button type="button" id="new-arrival-prev" class="slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1" >
                            <i class="ph ph-caret-left"></i>
                        </button>
                        <button type="button" id="new-arrival-next" class="slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1" >
                            <i class="ph ph-caret-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* <div class="new-arrival__slider arrow-style-two"> */}
        <Slider
            {...settings}
            asNavFor={nav1}
            ref={(slider1) => setNav1(slider1)}
            className="new-arrival__slider arrow-style-two"
        >
            <div>
                <div class="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <a href="product-details.html" class="product-card__thumb flex-center">
                        <img src="assets/images/thumbs/product-img7.png" alt=""/>
                    </a>
                    <div class="product-card__content p-sm-2 w-100">
                        <h6 class="title text-lg fw-semibold mt-12 mb-8">
                            <a href="product-details.html" class="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a>
                        </h6>   
                        <div class="flex-align gap-4">
                            <span class="text-main-600 text-md d-flex"><i class="ph-fill ph-storefront"></i></span>
                            <span class="text-gray-500 text-xs">By Lucky Supermarket</span>
                        </div>

                        <div class="product-card__content mt-12">
                            <div class="product-card__price mb-8">
                                <span class="text-heading text-md fw-semibold ">$14.99 <span class="text-gray-500 fw-normal">/Qty</span> </span>
                                <span class="text-gray-400 text-md fw-semibold text-decoration-line-through"> $28.99</span>
                            </div>
                            <div class="flex-align gap-6">
                                <span class="text-xs fw-bold text-gray-600">4.8</span>
                                <span class="text-15 fw-bold text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                <span class="text-xs fw-bold text-gray-600">(17k)</span>
                            </div>
                             <a href="cart.html" class="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center">
                                Add To Cart <i class="ph ph-shopping-cart"></i> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span class="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span>
                    <a href="product-details.html" class="product-card__thumb flex-center">
                        <img src="assets/images/thumbs/product-img8.png" alt=""/>
                    </a>
                    <div class="product-card__content p-sm-2 w-100">
                        <h6 class="title text-lg fw-semibold mt-12 mb-8">
                            <a href="product-details.html" class="link text-line-2">Marcel's Modern Pantry Almond Unsweetened</a>
                        </h6>
                        <div class="flex-align gap-4">
                            <span class="text-main-600 text-md d-flex"><i class="ph-fill ph-storefront"></i></span>
                            <span class="text-gray-500 text-xs">By Lucky Supermarket</span>
                        </div>

                        <div class="product-card__content mt-12">
                            <div class="product-card__price mb-8">
                                <span class="text-heading text-md fw-semibold ">$14.99 <span class="text-gray-500 fw-normal">/Qty</span> </span>
                                <span class="text-gray-400 text-md fw-semibold text-decoration-line-through"> $28.99</span>
                            </div>
                            <div class="flex-align gap-6">
                                <span class="text-xs fw-bold text-gray-600">4.8</span>
                                <span class="text-15 fw-bold text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                <span class="text-xs fw-bold text-gray-600">(17k)</span>
                            </div>
                             <a href="cart.html" class="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center">
                                Add To Cart <i class="ph ph-shopping-cart"></i> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span class="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span>
                    <a href="product-details.html" class="product-card__thumb flex-center">
                        <img src="assets/images/thumbs/product-img9.png" alt=""/>
                    </a>
                    <div class="product-card__content p-sm-2 w-100">
                        <h6 class="title text-lg fw-semibold mt-12 mb-8">
                            <a href="product-details.html" class="link text-line-2">O Organics Milk, Whole, Vitamin D</a>
                        </h6>
                        <div class="flex-align gap-4">
                            <span class="text-main-600 text-md d-flex"><i class="ph-fill ph-storefront"></i></span>
                            <span class="text-gray-500 text-xs">By Lucky Supermarket</span>
                        </div>

                        <div class="product-card__content mt-12">
                            <div class="product-card__price mb-8">
                                <span class="text-heading text-md fw-semibold ">$14.99 <span class="text-gray-500 fw-normal">/Qty</span> </span>
                                <span class="text-gray-400 text-md fw-semibold text-decoration-line-through"> $28.99</span>
                            </div>
                            <div class="flex-align gap-6">
                                <span class="text-xs fw-bold text-gray-600">4.8</span>
                                <span class="text-15 fw-bold text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                <span class="text-xs fw-bold text-gray-600">(17k)</span>
                            </div>
                             <a href="cart.html" class="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center">
                                Add To Cart <i class="ph ph-shopping-cart"></i> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span class="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">Best Sale </span>
                    <a href="product-details.html" class="product-card__thumb flex-center">
                        <img src="assets/images/thumbs/product-img10.png" alt=""/>
                    </a>
                    <div class="product-card__content p-sm-2 w-100">
                        <h6 class="title text-lg fw-semibold mt-12 mb-8">
                            <a href="product-details.html" class="link text-line-2">Whole Grains and Seeds Organic Bread</a>
                        </h6>
                        <div class="flex-align gap-4">
                            <span class="text-main-600 text-md d-flex"><i class="ph-fill ph-storefront"></i></span>
                            <span class="text-gray-500 text-xs">By Lucky Supermarket</span>
                        </div>

                        <div class="product-card__content mt-12">
                            <div class="product-card__price mb-8">
                                <span class="text-heading text-md fw-semibold ">$14.99 <span class="text-gray-500 fw-normal">/Qty</span> </span>
                                <span class="text-gray-400 text-md fw-semibold text-decoration-line-through"> $28.99</span>
                            </div>
                            <div class="flex-align gap-6">
                                <span class="text-xs fw-bold text-gray-600">4.8</span>
                                <span class="text-15 fw-bold text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                <span class="text-xs fw-bold text-gray-600">(17k)</span>
                            </div>
                             <a href="cart.html" class="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center">
                                Add To Cart <i class="ph ph-shopping-cart"></i> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <a href="product-details.html" class="product-card__thumb flex-center">
                        <img src="assets/images/thumbs/product-img11.png" alt=""/>
                    </a>
                    <div class="product-card__content p-sm-2 w-100">
                        <h6 class="title text-lg fw-semibold mt-12 mb-8">
                            <a href="product-details.html" class="link text-line-2">Lucerne Yogurt, Lowfat, Strawberry</a>
                        </h6>
                        <div class="flex-align gap-4">
                            <span class="text-main-600 text-md d-flex"><i class="ph-fill ph-storefront"></i></span>
                            <span class="text-gray-500 text-xs">By Lucky Supermarket</span>
                        </div>

                        <div class="product-card__content mt-12">
                            <div class="product-card__price mb-8">
                                <span class="text-heading text-md fw-semibold ">$14.99 <span class="text-gray-500 fw-normal">/Qty</span> </span>
                                <span class="text-gray-400 text-md fw-semibold text-decoration-line-through"> $28.99</span>
                            </div>
                            <div class="flex-align gap-6">
                                <span class="text-xs fw-bold text-gray-600">4.8</span>
                                <span class="text-15 fw-bold text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                <span class="text-xs fw-bold text-gray-600">(17k)</span>
                            </div>
                             <a href="cart.html" class="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center">
                                Add To Cart <i class="ph ph-shopping-cart"></i> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span class="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span>
                    <a href="product-details.html" class="product-card__thumb flex-center">
                        <img src="assets/images/thumbs/product-img12.png" alt=""/>
                    </a>
                    <div class="product-card__content p-sm-2 w-100">
                        <h6 class="title text-lg fw-semibold mt-12 mb-8">
                            <a href="product-details.html" class="link text-line-2">Nature Valley Whole Grain Oats and Honey Protein</a>
                        </h6>
                        <div class="flex-align gap-4">
                            <span class="text-main-600 text-md d-flex"><i class="ph-fill ph-storefront"></i></span>
                            <span class="text-gray-500 text-xs">By Lucky Supermarket</span>
                        </div>

                        <div class="product-card__content mt-12">
                            <div class="product-card__price mb-8">
                                <span class="text-heading text-md fw-semibold ">$14.99 <span class="text-gray-500 fw-normal">/Qty</span> </span>
                                <span class="text-gray-400 text-md fw-semibold text-decoration-line-through"> $28.99</span>
                            </div>
                            <div class="flex-align gap-6">
                                <span class="text-xs fw-bold text-gray-600">4.8</span>
                                <span class="text-15 fw-bold text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                <span class="text-xs fw-bold text-gray-600">(17k)</span>
                            </div>
                             <a href="cart.html" class="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center">
                                Add To Cart <i class="ph ph-shopping-cart"></i> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span class="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">Best Sale </span>
                    <a href="product-details.html" class="product-card__thumb flex-center">
                        <img src="assets/images/thumbs/product-img10.png" alt=""/>
                    </a>
                    <div class="product-card__content p-sm-2 w-100">
                        <h6 class="title text-lg fw-semibold mt-12 mb-8">
                            <a href="product-details.html" class="link text-line-2">Whole Grains and Seeds Organic Bread</a>
                        </h6>
                        <div class="flex-align gap-4">
                            <span class="text-main-600 text-md d-flex"><i class="ph-fill ph-storefront"></i></span>
                            <span class="text-gray-500 text-xs">By Lucky Supermarket</span>
                        </div>

                        <div class="product-card__content mt-12">
                            <div class="product-card__price mb-8">
                                <span class="text-heading text-md fw-semibold ">$14.99 <span class="text-gray-500 fw-normal">/Qty</span> </span>
                                <span class="text-gray-400 text-md fw-semibold text-decoration-line-through"> $28.99</span>
                            </div>
                            <div class="flex-align gap-6">
                                <span class="text-xs fw-bold text-gray-600">4.8</span>
                                <span class="text-15 fw-bold text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                <span class="text-xs fw-bold text-gray-600">(17k)</span>
                            </div>
                             <a href="cart.html" class="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center">
                                Add To Cart <i class="ph ph-shopping-cart"></i> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    </div>
 </section>
  );
};

export default SimilarProduct;
