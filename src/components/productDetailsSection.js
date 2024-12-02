import React, { useEffect,useState } from 'react';
import Slider from 'react-slick';

const ProductDetailsSection = () => {

    const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const thumbSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: nav2,  // Sync with the images slider
  };

  const imagesSliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: nav1,  // Sync with the thumbnail slider
    dots: false,
    arrows: false,
    focusOnSelect: true,
  };

  return (
    <section class="product-details py-80">
    <div class="container container-lg">
        <div class="row gy-4">
            <div class="col-lg-9">
                <div class="row gy-4">
                    <div class="col-xl-6">
                        <div class="product-details__left">
                            
                            {/* <div class="product-details__thumb-slider border border-gray-100 rounded-16"> */}
                            <Slider
                                {...thumbSliderSettings}
                                asNavFor={nav2}
                                ref={(slider1) => setNav1(slider1)}
                                className="product-details__thumb-slider"
                            >
                                <div class="">
                                    <div class="product-details__thumb flex-center h-100">
                                        <img src="assets/images/thumbs/product-details-thumb1.png" alt=""/>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="product-details__thumb flex-center h-100">
                                        <img src="assets/images/thumbs/product-details-thumb2.png" alt=""/>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="product-details__thumb flex-center h-100">
                                        <img src="assets/images/thumbs/product-details-thumb3.png" alt=""/>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="product-details__thumb flex-center h-100">
                                        <img src="assets/images/thumbs/product-details-thumb1.png" alt=""/>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="product-details__thumb flex-center h-100">
                                        <img src="assets/images/thumbs/product-details-thumb2.png" alt=""/>
                                    </div>
                                </div>
                            </Slider>
                            {/* </div> */}

                            <div class="mt-24">
                                {/* <div class="product-details__images-slider"> */}
                                <Slider
                                {...imagesSliderSettings}
                                asNavFor={nav1}
                                ref={(slider2) => setNav2(slider2)}
                                className="product-details__images-slider"
                            >
                                    <div>
                                        <div class="max-w-120 max-h-120 h-100 flex-center border border-gray-100 rounded-16 p-8">
                                            <img src="assets/images/thumbs/product-details-img1.png" alt=""/>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="max-w-120 max-h-120 h-100 flex-center border border-gray-100 rounded-16 p-8">
                                            <img src="assets/images/thumbs/product-details-img2.png" alt=""/>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="max-w-120 max-h-120 h-100 flex-center border border-gray-100 rounded-16 p-8">
                                            <img src="assets/images/thumbs/product-details-img3.png" alt=""/>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="max-w-120 max-h-120 h-100 flex-center border border-gray-100 rounded-16 p-8">
                                            <img src="assets/images/thumbs/product-details-img1.png" alt=""/>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="max-w-120 max-h-120 h-100 flex-center border border-gray-100 rounded-16 p-8">
                                            <img src="assets/images/thumbs/product-details-img2.png" alt=""/>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="product-details__content">
                            <h5 class="mb-12">Lay's Potato Chips Onion Flavored</h5>
                            <div class="flex-align flex-wrap gap-12">
                                <div class="flex-align gap-12 flex-wrap">
                                    <div class="flex-align gap-8">
                                        <span class="text-15 fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                        <span class="text-15 fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                        <span class="text-15 fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                        <span class="text-15 fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                        <span class="text-15 fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                    </div>
                                    <span class="text-sm fw-medium text-neutral-600">4.7 Star Rating</span>
                                    <span class="text-sm fw-medium text-gray-500">(21,671)</span>
                                </div>
                                <span class="text-sm fw-medium text-gray-500">|</span>
                                <span class="text-gray-900"> <span class="text-gray-400">SKU:</span>EB4DRP </span>
                            </div>
                            <span class="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block"></span>
                            <p class="text-gray-700">Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>
                            <div class="mt-32 flex-align flex-wrap gap-32">
                                <div class="flex-align gap-8">
                                    <h4 class="mb-0">$25.00</h4>
                                    <span class="text-md text-gray-500">$38.00</span>
                                </div>
                                <a href="#" class="btn btn-main rounded-pill">Order on What'sApp</a>
                            </div>
                            <span class="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block"></span>

                            <div class="flex-align flex-wrap gap-16 bg-color-one rounded-8 py-16 px-24">
                                <div class="flex-align gap-16">
                                    <span class="text-main-600 text-sm">Special Offer:</span>
                                </div>
                                <div class="countdown" id="countdown11">
                                    <ul class="countdown-list flex-align flex-wrap">
                                        <li class="countdown-list__item text-heading flex-align gap-4 text-xs fw-medium w-28 h-28 rounded-4 border border-main-600 p-0 flex-center"><span class="days"></span></li>
                                        <li class="countdown-list__item text-heading flex-align gap-4 text-xs fw-medium w-28 h-28 rounded-4 border border-main-600 p-0 flex-center"><span class="hours"></span></li>
                                        <li class="countdown-list__item text-heading flex-align gap-4 text-xs fw-medium w-28 h-28 rounded-4 border border-main-600 p-0 flex-center"><span class="minutes"></span></li>
                                        <li class="countdown-list__item text-heading flex-align gap-4 text-xs fw-medium w-28 h-28 rounded-4 border border-main-600 p-0 flex-center"><span class="seconds"></span></li>
                                    </ul>
                                </div>
                                <span class="text-gray-900 text-xs">Remains untill the end of the offer</span>
                            </div>

                            <div class="mb-24">
                                <div class="mt-32 flex-align gap-12 mb-16">
                                    <span class="w-32 h-32 bg-white flex-center rounded-circle text-main-600 box-shadow-xl"><i class="ph-fill ph-lightning"></i></span>
                                    <h6 class="text-md mb-0 fw-bold text-gray-900">Products are almost sold out</h6>
                                </div>
                                <div class="progress w-100 bg-gray-100 rounded-pill h-8" role="progressbar" aria-label="Basic example" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-main-two-600 rounded-pill" style={{ width: '32%' }}></div>
                                </div>
                                <span class="text-sm text-gray-700 mt-8">Available only:45</span>
                            </div>

                            <span class="text-gray-900 d-block mb-8">Quantity:</span>
                            <div class="flex-between gap-16 flex-wrap">
                                <div class="flex-align flex-wrap gap-16">
                                    <div class="border border-gray-100 rounded-pill py-9 px-16 flex-align">
                                        <button type="button" class="quantity__minus p-4 text-gray-700 hover-text-main-600 flex-center"><i class="ph ph-minus"></i></button>
                                        <input type="number" class="quantity__input border-0 text-center w-32" value="1" />
                                        <button type="button" class="quantity__plus p-4 text-gray-700 hover-text-main-600 flex-center"><i class="ph ph-plus"></i></button>
                                    </div>
                                    <a href="#" class="btn btn-main rounded-pill flex-align d-inline-flex gap-8 px-48"> <i class="ph ph-shopping-cart"></i> Add To Cart</a>
                                </div>
                                
                                <div class="flex-align gap-12">
                                    <a href="#" class="w-52 h-52 bg-main-50 text-main-600 text-xl hover-bg-main-600 hover-text-white flex-center rounded-circle">
                                        <i class="ph ph-heart"></i>
                                    </a>
                                    <a href="#" class="w-52 h-52 bg-main-50 text-main-600 text-xl hover-bg-main-600 hover-text-white flex-center rounded-circle">
                                        <i class="ph ph-shuffle"></i>
                                    </a>
                                    <a href="#" class="w-52 h-52 bg-main-50 text-main-600 text-xl hover-bg-main-600 hover-text-white flex-center rounded-circle">
                                        <i class="ph ph-share-network"></i>
                                    </a>
                                </div>
                            </div>
                            
                            <span class="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block"></span>

                            <div class="flex-between gap-16 p-12 border border-main-two-600 border-dashed rounded-8 mb-16">
                                <div class="flex-align gap-12">
                                    <button type="button" class="w-18 h-18 flex-center border border-gray-900 text-xs rounded-circle hover-bg-gray-100">
                                        <i class="ph ph-plus"></i>
                                    </button>
                                    <span class="text-gray-900 fw-medium text-xs">Mfr. coupon. $3.00 off 5</span>
                                </div>
                                <a href="cart.html" class="text-xs fw-semibold text-main-two-600 text-decoration-underline hover-text-main-two-700">View Details</a>
                            </div>
                            <ul class="list-inside ms-12">
                                <li class="text-gray-900 text-sm mb-8">Buy 1, Get 1 FREE</li>
                                <li class="text-gray-900 text-sm mb-0">Buy 1, Get 1 FREE</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="product-details__sidebar border border-gray-100 rounded-16 overflow-hidden">
                    <div class="p-24">
                        <div class="flex-between bg-main-600 rounded-pill p-8">
                            <div class="flex-align gap-8">
                                <span class="w-44 h-44 bg-white rounded-circle flex-center text-2xl"><i class="ph ph-storefront"></i></span>
                                <span class="text-white">by Marketpro</span>
                            </div>
                            <a href="shop.html" class="btn btn-white rounded-pill text-uppercase">View Store</a>
                        </div>
                    </div>
                    <div class="p-24 bg-color-one d-flex align-items-start gap-24 border-bottom border-gray-100">
                        <span class="w-44 h-44 bg-white text-main-600 rounded-circle flex-center text-2xl flex-shrink-0">
                            <i class="ph-fill ph-truck"></i>
                        </span>
                        <div class="">
                            <h6 class="text-sm mb-8">Fast Delivery</h6>
                            <p class="text-gray-700">Lightning-fast shipping, guaranteed.</p>
                        </div>
                    </div>
                    <div class="p-24 bg-color-one d-flex align-items-start gap-24 border-bottom border-gray-100">
                        <span class="w-44 h-44 bg-white text-main-600 rounded-circle flex-center text-2xl flex-shrink-0">
                            <i class="ph-fill ph-arrow-u-up-left"></i>
                        </span>
                        <div class="">
                            <h6 class="text-sm mb-8">Free 90-day returns</h6>
                            <p class="text-gray-700">Shop risk-free with easy returns.</p>
                        </div>
                    </div>
                    <div class="p-24 bg-color-one d-flex align-items-start gap-24 border-bottom border-gray-100">
                        <span class="w-44 h-44 bg-white text-main-600 rounded-circle flex-center text-2xl flex-shrink-0">
                            <i class="ph-fill ph-check-circle"></i>
                        </span>
                        <div class="">
                            <h6 class="text-sm mb-8">Pickup available at Shop location</h6>
                            <p class="text-gray-700">Usually ready in 24 hours</p>
                        </div>
                    </div>
                    <div class="p-24 bg-color-one d-flex align-items-start gap-24 border-bottom border-gray-100">
                        <span class="w-44 h-44 bg-white text-main-600 rounded-circle flex-center text-2xl flex-shrink-0">
                            <i class="ph-fill ph-credit-card"></i>
                        </span>
                        <div class="">
                            <h6 class="text-sm mb-8">Payment</h6>
                            <p class="text-gray-700">Payment upon receipt of goods, Payment by card in the department, Google Pay, Online card.</p>
                        </div>
                    </div>
                    <div class="p-24 bg-color-one d-flex align-items-start gap-24 border-bottom border-gray-100">
                        <span class="w-44 h-44 bg-white text-main-600 rounded-circle flex-center text-2xl flex-shrink-0">
                            <i class="ph-fill ph-check-circle"></i>
                        </span>
                        <div class="">
                            <h6 class="text-sm mb-8">Warranty</h6>
                            <p class="text-gray-700">The Consumer Protection Act does not provide for the return of this product of proper quality.</p>
                        </div>
                    </div>
                    <div class="p-24 bg-color-one d-flex align-items-start gap-24 border-bottom border-gray-100">
                        <span class="w-44 h-44 bg-white text-main-600 rounded-circle flex-center text-2xl flex-shrink-0">
                            <i class="ph-fill ph-package"></i>
                        </span>
                        <div class="">
                            <h6 class="text-sm mb-8">Packaging</h6>
                            <p class="text-gray-700">Research & development value proposition graphical user interface investor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="pt-80">
            <div class="product-dContent border rounded-24">
                <div class="product-dContent__header border-bottom border-gray-100 flex-between flex-wrap gap-16">
                    <ul class="nav common-tab nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button class="nav-link active" id="pills-description-tab" data-bs-toggle="pill" data-bs-target="#pills-description" type="button" role="tab" aria-controls="pills-description" aria-selected="true">Description</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="pills-reviews-tab" data-bs-toggle="pill" data-bs-target="#pills-reviews" type="button" role="tab" aria-controls="pills-reviews" aria-selected="false">Reviews</button>
                        </li>
                    </ul>
                    <a href="#" class="btn bg-color-one rounded-16 flex-align gap-8 text-main-600 hover-bg-main-600 hover-text-white">
                        <img src="assets/images/icon/satisfaction-icon.png" alt=""/>
                        100% Satisfaction Guaranteed
                    </a>
                </div>
                <div class="product-dContent__box">
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab" tabindex="0">
                            <div class="mb-40">
                                <h6 class="mb-24">Product Description</h6>
                                <p>Wherever celebrations and good times happen, the LAY'S brand will be there just as it has been for more than 75 years. With flavors almost as rich as our history, we have a chip or crisp flavor guaranteed to bring a smile on your face. </p>
                                <p>Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies cursus ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet consequat nulla felis pharetra lacus. Duis semper erat mauris, sed egestas purus commodo vel.</p>    
                                <ul class="list-inside mt-32 ms-16">
                                    <li class="text-gray-400 mb-4">8.0 oz. bag of LAY'S Classic Potato Chips</li>
                                    <li class="text-gray-400 mb-4">Tasty LAY's potato chips are a great snack</li>
                                    <li class="text-gray-400 mb-4">Includes three ingredients: potatoes, oil, and salt</li>
                                    <li class="text-gray-400 mb-4">Gluten free product</li>
                                </ul>
                                <ul class="mt-32">
                                    <li class="text-gray-400 mb-4">Made in USA</li>
                                    <li class="text-gray-400 mb-4">Ready To Eat.</li>
                                </ul>
                            </div>
                            <div class="mb-40">
                                <h6 class="mb-24">Product Specifications</h6>
                                <ul class="mt-32">
                                    <li class="text-gray-400 mb-14 flex-align gap-14">
                                        <span class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                            <i class="ph ph-check"></i>
                                        </span>
                                        <span class="text-heading fw-medium">
                                            Product Type:
                                            <span class="text-gray-500"> Chips & Dips</span>
                                        </span>
                                    </li>
                                    <li class="text-gray-400 mb-14 flex-align gap-14">
                                        <span class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                            <i class="ph ph-check"></i>
                                        </span>
                                        <span class="text-heading fw-medium">
                                            Product Name:
                                            <span class="text-gray-500"> Potato Chips Classic </span>
                                        </span>
                                    </li>
                                    <li class="text-gray-400 mb-14 flex-align gap-14">
                                        <span class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                            <i class="ph ph-check"></i>
                                        </span>
                                        <span class="text-heading fw-medium">
                                            Brand:
                                            <span class="text-gray-500"> Lay's</span>
                                        </span>
                                    </li>
                                    <li class="text-gray-400 mb-14 flex-align gap-14">
                                        <span class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                            <i class="ph ph-check"></i>
                                        </span>
                                        <span class="text-heading fw-medium">
                                            FSA Eligible:
                                            <span class="text-gray-500"> No</span>
                                        </span>
                                    </li>
                                    <li class="text-gray-400 mb-14 flex-align gap-14">
                                        <span class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                            <i class="ph ph-check"></i>
                                        </span>
                                        <span class="text-heading fw-medium">
                                            Size/Count: 
                                            <span class="text-gray-500"> 8.0oz</span>
                                        </span>
                                    </li>
                                    <li class="text-gray-400 mb-14 flex-align gap-14">
                                        <span class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                            <i class="ph ph-check"></i>
                                        </span>
                                        <span class="text-heading fw-medium">
                                            Item Code:
                                            <span class="text-gray-500"> 331539</span>
                                        </span>
                                    </li>
                                    <li class="text-gray-400 mb-14 flex-align gap-14">
                                        <span class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                            <i class="ph ph-check"></i>
                                        </span>
                                        <span class="text-heading fw-medium">
                                            Ingredients:
                                            <span class="text-gray-500"> Potatoes, Vegetable Oil, and Salt.</span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div class="mb-40">
                                <h6 class="mb-24">Nutrition Facts</h6>
                                <ul class="mt-32">
                                    <li class="text-gray-400 mb-14 flex-align gap-14">
                                        <span class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                            <i class="ph ph-check"></i>
                                        </span>
                                        <span class="text-heading fw-medium"> Total Fat 10g 13%</span>
                                    </li>
                                    <li class="text-gray-400 mb-14 flex-align gap-14">
                                        <span class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                            <i class="ph ph-check"></i>
                                        </span>
                                        <span class="text-heading fw-medium"> Saturated Fat 1.5g 7%</span>
                                    </li>
                                    <li class="text-gray-400 mb-14 flex-align gap-14">
                                        <span class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                            <i class="ph ph-check"></i>
                                        </span>
                                        <span class="text-heading fw-medium"> Cholesterol 0mg 0%</span>
                                    </li>
                                    <li class="text-gray-400 mb-14 flex-align gap-14">
                                        <span class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                            <i class="ph ph-check"></i>
                                        </span>
                                        <span class="text-heading fw-medium"> Sodium 170mg 7%</span>
                                    </li>
                                    <li class="text-gray-400 mb-14 flex-align gap-14">
                                        <span class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                            <i class="ph ph-check"></i>
                                        </span>
                                        <span class="text-heading fw-medium"> Potassium 350mg 6%</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="mb-0">
                                <h6 class="mb-24">More Details</h6>
                                <ul class="mt-32">
                                    <li class="text-gray-400 mb-14 flex-align gap-14">
                                        <span class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                            <i class="ph ph-check"></i>
                                        </span>
                                        <span class="text-gray-500"> Lunarlon midsole delivers ultra-plush responsiveness</span>
                                    </li>
                                    <li class="text-gray-400 mb-14 flex-align gap-14">
                                        <span class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                            <i class="ph ph-check"></i>
                                        </span>
                                        <span class="text-gray-500"> Encapsulated Air-Sole heel unit for lightweight cushioning</span>
                                    </li>
                                    <li class="text-gray-400 mb-14 flex-align gap-14">
                                        <span class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                            <i class="ph ph-check"></i>
                                        </span>
                                        <span class="text-gray-500"> Colour Shown: Ale Brown/Black/Goldtone/Ale Brown</span>
                                    </li>
                                    <li class="text-gray-400 mb-14 flex-align gap-14">
                                        <span class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                            <i class="ph ph-check"></i>
                                        </span>
                                        <span class="text-gray-500"> Style: 805899-202</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div class="tab-pane fade" id="pills-reviews" role="tabpanel" aria-labelledby="pills-reviews-tab" tabindex="0">
                            <div class="row g-4">
                                <div class="col-lg-6">
                                    <h6 class="mb-24">Product Description</h6>
                                    <div class="d-flex align-items-start gap-24 pb-44 border-bottom border-gray-100 mb-44">
                                        <img src="assets/images/thumbs/comment-img1.png" alt="" class="w-52 h-52 object-fit-cover rounded-circle flex-shrink-0" />
                                        <div class="flex-grow-1">
                                            <div class="flex-between align-items-start gap-8 ">
                                                <div class="">
                                                    <h6 class="mb-12 text-md">Nicolas cage</h6>
                                                    <div class="flex-align gap-8">
                                                        <span class="text-15 fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-15 fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-15 fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-15 fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-15 fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                    </div>
                                                </div>
                                                <span class="text-gray-800 text-xs">3 Days ago</span>
                                            </div>
                                            <h6 class="mb-14 text-md mt-24">Greate Product</h6>
                                            <p class="text-gray-700">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>

                                            <div class="flex-align gap-20 mt-44">
                                                <button class="flex-align gap-12 text-gray-700 hover-text-main-600">
                                                    <i class="ph-bold ph-thumbs-up"></i>
                                                    Like
                                                </button>
                                                <a href="#comment-form" class="flex-align gap-12 text-gray-700 hover-text-main-600">
                                                    <i class="ph-bold ph-arrow-bend-up-left"></i>
                                                    Replay
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-start gap-24">
                                        <img src="assets/images/thumbs/comment-img1.png" alt="" class="w-52 h-52 object-fit-cover rounded-circle flex-shrink-0" />
                                        <div class="flex-grow-1">
                                            <div class="flex-between align-items-start gap-8 ">
                                                <div class="">
                                                    <h6 class="mb-12 text-md">Nicolas cage</h6>
                                                    <div class="flex-align gap-8">
                                                        <span class="text-15 fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-15 fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-15 fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-15 fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-15 fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                    </div>
                                                </div>
                                                <span class="text-gray-800 text-xs">3 Days ago</span>
                                            </div>
                                            <h6 class="mb-14 text-md mt-24">Greate Product</h6>
                                            <p class="text-gray-700">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>

                                            <div class="flex-align gap-20 mt-44">
                                                <button class="flex-align gap-12 text-gray-700 hover-text-main-600">
                                                    <i class="ph-bold ph-thumbs-up"></i>
                                                    Like
                                                </button>
                                                <a href="#comment-form" class="flex-align gap-12 text-gray-700 hover-text-main-600">
                                                    <i class="ph-bold ph-arrow-bend-up-left"></i>
                                                    Replay
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mt-56">
                                        <div class="">
                                            <h6 class="mb-24">Write a Review</h6>
                                            <span class="text-heading mb-8">What is it like to Product?</span>
                                            <div class="flex-align gap-8">
                                                <span class="text-15 fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                <span class="text-15 fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                <span class="text-15 fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                <span class="text-15 fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                <span class="text-15 fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                            </div>
                                        </div>
                                        <div class="mt-32">
                                            <form action="#">   
                                                <div class="mb-32">
                                                    <label for="title" class="text-neutral-600 mb-8">Review Title</label>
                                                    <input type="text" class="common-input rounded-8" id="title" placeholder="Great Products" />
                                                </div>
                                                <div class="mb-32">
                                                    <label for="desc" class="text-neutral-600 mb-8">Review Content</label>
                                                    <textarea class="common-input rounded-8" id="desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</textarea>
                                                </div>
                                                <button type="submit" class="btn btn-main rounded-pill mt-48">Submit Review</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="ms-xxl-5">
                                        <h6 class="mb-24">Customers Feedback</h6>
                                        <div class="d-flex flex-wrap gap-44">
                                            <div class="border border-gray-100 rounded-8 px-40 py-52 flex-center flex-column flex-shrink-0 text-center">
                                                <h2 class="mb-6 text-main-600">4.8</h2>
                                                <div class="flex-center gap-8">
                                                    <span class="text-15 fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                    <span class="text-15 fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                    <span class="text-15 fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                    <span class="text-15 fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                    <span class="text-15 fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                </div>
                                                <span class="mt-16 text-gray-500">Average Product Rating</span>
                                            </div>
                                            <div class="border border-gray-100 rounded-8 px-24 py-40 flex-grow-1">
                                                <div class="flex-align gap-8 mb-20">
                                                    <span class="text-gray-900 flex-shrink-0">5</span>
                                                    <div class="progress w-100 bg-gray-100 rounded-pill h-8" role="progressbar" aria-label="Basic example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                                        <div class="progress-bar bg-main-600 rounded-pill" style={{ width: '70%' }}></div>
                                                    </div>
                                                    <div class="flex-align gap-4">
                                                        <span class="text-xs fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-xs fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-xs fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-xs fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-xs fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                    </div>
                                                    <span class="text-gray-900 flex-shrink-0">124</span>
                                                </div>
                                                <div class="flex-align gap-8 mb-20">
                                                    <span class="text-gray-900 flex-shrink-0">4</span>
                                                    <div class="progress w-100 bg-gray-100 rounded-pill h-8" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                                        <div class="progress-bar bg-main-600 rounded-pill" style={{ width: '50%' }}></div>
                                                    </div>
                                                    <div class="flex-align gap-4">
                                                        <span class="text-xs fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-xs fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-xs fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-xs fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-xs fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                    </div>
                                                    <span class="text-gray-900 flex-shrink-0">52</span>
                                                </div>
                                                <div class="flex-align gap-8 mb-20">
                                                    <span class="text-gray-900 flex-shrink-0">3</span>
                                                    <div class="progress w-100 bg-gray-100 rounded-pill h-8" role="progressbar" aria-label="Basic example" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                                                        <div class="progress-bar bg-main-600 rounded-pill" style={{ width: '35%' }}></div>
                                                    </div>
                                                    <div class="flex-align gap-4">
                                                        <span class="text-xs fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-xs fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-xs fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-xs fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-xs fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                    </div>
                                                    <span class="text-gray-900 flex-shrink-0">12</span>
                                                </div>
                                                <div class="flex-align gap-8 mb-20">
                                                    <span class="text-gray-900 flex-shrink-0">2</span>
                                                    <div class="progress w-100 bg-gray-100 rounded-pill h-8" role="progressbar" aria-label="Basic example" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                        <div class="progress-bar bg-main-600 rounded-pill" style={{ width: '20%' }}></div>
                                                    </div>
                                                    <div class="flex-align gap-4">
                                                        <span class="text-xs fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-xs fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-xs fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-xs fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-xs fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                    </div>
                                                    <span class="text-gray-900 flex-shrink-0">5</span>
                                                </div>
                                                <div class="flex-align gap-8 mb-0">
                                                    <span class="text-gray-900 flex-shrink-0">1</span>
                                                    <div class="progress w-100 bg-gray-100 rounded-pill h-8" role="progressbar" aria-label="Basic example" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100">
                                                        <div class="progress-bar bg-main-600 rounded-pill" style={{ width: '5%' }}></div>
                                                    </div>
                                                    <div class="flex-align gap-4">
                                                        <span class="text-xs fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-xs fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-xs fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-xs fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                        <span class="text-xs fw-medium text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
                                                    </div>
                                                    <span class="text-gray-900 flex-shrink-0">2</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>  
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default ProductDetailsSection;