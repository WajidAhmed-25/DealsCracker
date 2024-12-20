
import React from 'react';
import logo from './Logo/logo_dc.png';

const HeaderMiddle = () => {
  return (
    <header class="header-middle bg-color-one border-bottom border-gray-100">
    <div class="container container-lg">
        <nav class="header-inner flex-between">
            <div class="logo">
                <a href="index.html" class="link">
                    <img src={logo} alt="Logo" />
                </a>
            </div>

            <form action="#" class="flex-align flex-wrap form-location-wrapper">
                <div class="search-category d-flex h-48 select-border-end-0 radius-end-0 search-form d-sm-flex d-none">
                    <select class="js-example-basic-single border border-gray-200 border-end-0" name="state">
                        <option value="1" selected disabled>All Categories</option>
                        <option value="1">Grocery</option>
                        <option value="1">Breakfast & Dairy</option>
                        <option value="1">Vegetables</option>
                        <option value="1">Milks and Dairies</option>
                        <option value="1">Pet Foods & Toy</option>
                        <option value="1">Breads & Bakery</option>
                        <option value="1">Fresh Seafood</option>
                        <option value="1">Fronzen Foods</option>
                        <option value="1">Noodles & Rice</option>
                        <option value="1">Ice Cream</option>
                    </select>
    
                    <div class="search-form__wrapper position-relative">
                        <input type="text" class="search-form__input common-input py-13 ps-16 pe-18 rounded-end-pill pe-44" placeholder="Search for a product or brand" />
                        <button type="submit" class="w-32 h-32 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"><i class="ph ph-magnifying-glass"></i></button>
                    </div>
                </div>

                <div class="location-box bg-white flex-align gap-8 py-6 px-16 rounded-pill border border-gray-100">
                    <span class="text-gray-900 text-xl d-xs-flex d-none"><i class="ph ph-map-pin"></i></span>
                    <div class="line-height-1">
                        <span class="text-gray-600 text-xs">Your Location</span>
                        <div class="line-height-1">
                            <select class="js-example-basic-single border border-gray-200 border-end-0" name="state">
                                <option value="1">Alabama</option>
                                <option value="1">Alaska</option>
                                <option value="1">Arizona</option>
                                <option value="1">Delaware</option>
                                <option value="1">Florida</option>
                                <option value="1">Georgia</option>
                                <option value="1">Hawaii</option>
                                <option value="1">Indiana</option>
                                <option value="1">Marzland</option>
                                <option value="1">Nevada</option>
                                <option value="1">New Jersey</option>
                                <option value="1">New Mexico</option>
                                <option value="1">New York</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
            <div class="header-right flex-align d-lg-block d-none">
                <div class="flex-align flex-wrap gap-12">
    <button type="button" class="search-icon flex-align d-lg-none d-flex gap-4 item-hover">
        <span class="text-2xl text-gray-700 d-flex position-relative item-hover__text">
            <i class="ph ph-magnifying-glass"></i>
        </span>
    </button>
    <a href="cart.html" class="flex-align gap-4 item-hover">
        <span class="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
            <i class="ph ph-heart"></i>
            <span class="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">2</span>
        </span>
        <span class="text-md text-gray-500 item-hover__text d-none d-lg-flex">Wishlist</span>
    </a>
    <a href="cart.html" class="flex-align gap-4 item-hover">
        <span class="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
            <i class="ph ph-shopping-cart-simple"></i>
            <span class="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">2</span>
        </span>
        <span class="text-md text-gray-500 item-hover__text d-none d-lg-flex">Cart</span>
    </a>
</div>
            </div>
        </nav>
    </div>
</header>
  );
};

export default HeaderMiddle;
