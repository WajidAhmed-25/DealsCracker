// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// const HomeProduct = () => {
//     const navigate = useNavigate();
//   return (
//     <div class="product mt-24">
//     <div class="container container-lg">
//         <div class="row gy-4 g-12">
//             <div class="col-xxl-2 col-lg-3 col-sm-4 col-6" data-aos="fade-up" data-aos-duration="200">
//                 <div class="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                      <a href="cart.html" class="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 position-absolute inset-block-start-0 inset-inline-end-0 me-16 mt-16">
//                         Add <i class="ph ph-shopping-cart"></i> 
//                     </a>
                   
//                     <a onClick={() => navigate('/productDetails')} class="product-card__thumb flex-center">
//                         <img src="assets/images/thumbs/product-img1.png" alt="" />
//                     </a>
//                     <div class="product-card__content mt-12">
//                         <div class="product-card__price mb-16">
//                             <span class="text-gray-400 text-md fw-semibold text-decoration-line-through"> $28.99</span>
//                             <span class="text-heading text-md fw-semibold ">$14.99 <span class="text-gray-500 fw-normal">/Qty</span> </span>
//                         </div>
//                         <div class="flex-align gap-6">
//                             <span class="text-xs fw-bold text-gray-600">4.8</span>
//                             <span class="text-15 fw-bold text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
//                             <span class="text-xs fw-bold text-gray-600">(17k)</span>
//                         </div>
//                         <h6 class="title text-lg fw-semibold mt-12 mb-8">
//                             <a onClick={() => navigate('/productDetails')} class="link text-line-2">Taylor Farms Broccoli Florets Vegetables</a>
//                         </h6>
//                         <div class="flex-align gap-4">
//                             <span class="text-main-600 text-md d-flex"><i class="ph-fill ph-storefront"></i></span>
//                             <span class="text-gray-500 text-xs">By Lucky Supermarket</span>
//                         </div>
//                         <div class="mt-12">
//                             <div class="progress w-100  bg-color-three rounded-pill h-4" role="progressbar" aria-label="Basic example" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
//                                 <div class="progress-bar bg-main-600 rounded-pill" style={{ width: '35%' }}></div>
//                             </div>
//                             <span class="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="col-xxl-2 col-lg-3 col-sm-4 col-6" data-aos="fade-up" data-aos-duration="400">
//                 <div class="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                      <a href="cart.html" class="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 position-absolute inset-block-start-0 inset-inline-end-0 me-16 mt-16">
//                         Add <i class="ph ph-shopping-cart"></i> 
//                     </a>
//                     <a onClick={() => navigate('/productDetails')} class="product-card__thumb flex-center">
//                         <img src="assets/images/thumbs/product-img2.png" alt="" />
//                     </a>
//                     <div class="product-card__content mt-12">
//                         <div class="product-card__price mb-16">
//                             <span class="text-gray-400 text-md fw-semibold text-decoration-line-through"> $28.99</span>
//                             <span class="text-heading text-md fw-semibold ">$14.99 <span class="text-gray-500 fw-normal">/Qty</span> </span>
//                         </div>
//                         <div class="flex-align gap-6">
//                             <span class="text-xs fw-bold text-gray-600">4.8</span>
//                             <span class="text-15 fw-bold text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
//                             <span class="text-xs fw-bold text-gray-600">(17k)</span>
//                         </div>
//                         <h6 class="title text-lg fw-semibold mt-12 mb-8">
//                             <a onClick={() => navigate('/productDetails')} class="link text-line-2">Taylor Farms Broccoli Florets Vegetables</a>
//                         </h6>
//                         <div class="flex-align gap-4">
//                             <span class="text-main-600 text-md d-flex"><i class="ph-fill ph-storefront"></i></span>
//                             <span class="text-gray-500 text-xs">By Lucky Supermarket</span>
//                         </div>
//                         <div class="mt-12">
//                             <div class="progress w-100  bg-color-three rounded-pill h-4" role="progressbar" aria-label="Basic example" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
//                                 <div class="progress-bar bg-main-600 rounded-pill" style={{ width: '35%' }}></div>
//                             </div>
//                             <span class="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="col-xxl-2 col-lg-3 col-sm-4 col-6" data-aos="fade-up" data-aos-duration="600">
//                 <div class="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                      <a href="cart.html" class="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 position-absolute inset-block-start-0 inset-inline-end-0 me-16 mt-16">
//                         Add <i class="ph ph-shopping-cart"></i> 
//                     </a>
//                     <a onClick={() => navigate('/productDetails')} class="product-card__thumb flex-center">
//                         <img src="assets/images/thumbs/product-img3.png" alt="" />
//                     </a>
//                     <div class="product-card__content mt-12">
//                         <div class="product-card__price mb-16">
//                             <span class="text-gray-400 text-md fw-semibold text-decoration-line-through"> $28.99</span>
//                             <span class="text-heading text-md fw-semibold ">$14.99 <span class="text-gray-500 fw-normal">/Qty</span> </span>
//                         </div>
//                         <div class="flex-align gap-6">
//                             <span class="text-xs fw-bold text-gray-600">4.8</span>
//                             <span class="text-15 fw-bold text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
//                             <span class="text-xs fw-bold text-gray-600">(17k)</span>
//                         </div>
//                         <h6 class="title text-lg fw-semibold mt-12 mb-8">
//                             <a onClick={() => navigate('/productDetails')} class="link text-line-2">Taylor Farms Broccoli Florets Vegetables</a>
//                         </h6>
//                         <div class="flex-align gap-4">
//                             <span class="text-main-600 text-md d-flex"><i class="ph-fill ph-storefront"></i></span>
//                             <span class="text-gray-500 text-xs">By Lucky Supermarket</span>
//                         </div>
//                         <div class="mt-12">
//                             <div class="progress w-100  bg-color-three rounded-pill h-4" role="progressbar" aria-label="Basic example" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
//                                 <div class="progress-bar bg-main-600 rounded-pill" style={{ width: '35%' }}></div>
//                             </div>
//                             <span class="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="col-xxl-2 col-lg-3 col-sm-4 col-6" data-aos="fade-up" data-aos-duration="800">
//                 <div class="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                      <a href="cart.html" class="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 position-absolute inset-block-start-0 inset-inline-end-0 me-16 mt-16">
//                         Add <i class="ph ph-shopping-cart"></i> 
//                     </a>
//                     <a onClick={() => navigate('/productDetails')} class="product-card__thumb flex-center">
//                         <img src="assets/images/thumbs/product-img1.png" alt="" />
//                     </a>
//                     <div class="product-card__content mt-12">
//                         <div class="product-card__price mb-16">
//                             <span class="text-gray-400 text-md fw-semibold text-decoration-line-through"> $28.99</span>
//                             <span class="text-heading text-md fw-semibold ">$14.99 <span class="text-gray-500 fw-normal">/Qty</span> </span>
//                         </div>
//                         <div class="flex-align gap-6">
//                             <span class="text-xs fw-bold text-gray-600">4.8</span>
//                             <span class="text-15 fw-bold text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
//                             <span class="text-xs fw-bold text-gray-600">(17k)</span>
//                         </div>
//                         <h6 class="title text-lg fw-semibold mt-12 mb-8">
//                             <a onClick={() => navigate('/productDetails')} class="link text-line-2">Taylor Farms Broccoli Florets Vegetables</a>
//                         </h6>
//                         <div class="flex-align gap-4">
//                             <span class="text-main-600 text-md d-flex"><i class="ph-fill ph-storefront"></i></span>
//                             <span class="text-gray-500 text-xs">By Lucky Supermarket</span>
//                         </div>
//                         <div class="mt-12">
//                             <div class="progress w-100  bg-color-three rounded-pill h-4" role="progressbar" aria-label="Basic example" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
//                                 <div class="progress-bar bg-main-600 rounded-pill" style={{ width: '35%' }}></div>
//                             </div>
//                             <span class="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="col-xxl-2 col-lg-3 col-sm-4 col-6" data-aos="fade-up" data-aos-duration="1000">
//                 <div class="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                      <a href="cart.html" class="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 position-absolute inset-block-start-0 inset-inline-end-0 me-16 mt-16">
//                         Add <i class="ph ph-shopping-cart"></i> 
//                     </a>
//                     <a onClick={() => navigate('/productDetails')} class="product-card__thumb flex-center">
//                         <img src="assets/images/thumbs/product-img5.png" alt="" />
//                     </a>
//                     <div class="product-card__content mt-12">
//                         <div class="product-card__price mb-16">
//                             <span class="text-gray-400 text-md fw-semibold text-decoration-line-through"> $28.99</span>
//                             <span class="text-heading text-md fw-semibold ">$14.99 <span class="text-gray-500 fw-normal">/Qty</span> </span>
//                         </div>
//                         <div class="flex-align gap-6">
//                             <span class="text-xs fw-bold text-gray-600">4.8</span>
//                             <span class="text-15 fw-bold text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
//                             <span class="text-xs fw-bold text-gray-600">(17k)</span>
//                         </div>
//                         <h6 class="title text-lg fw-semibold mt-12 mb-8">
//                             <a onClick={() => navigate('/productDetails')} class="link text-line-2">Taylor Farms Broccoli Florets Vegetables</a>
//                         </h6>
//                         <div class="flex-align gap-4">
//                             <span class="text-main-600 text-md d-flex"><i class="ph-fill ph-storefront"></i></span>
//                             <span class="text-gray-500 text-xs">By Lucky Supermarket</span>
//                         </div>
//                         <div class="mt-12">
//                             <div class="progress w-100  bg-color-three rounded-pill h-4" role="progressbar" aria-label="Basic example" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
//                                 <div class="progress-bar bg-main-600 rounded-pill" style={{ width: '35%' }}></div>
//                             </div>
//                             <span class="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="col-xxl-2 col-lg-3 col-sm-4 col-6" data-aos="fade-up" data-aos-duration="1200">
//                 <div class="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                      <a href="cart.html" class="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 position-absolute inset-block-start-0 inset-inline-end-0 me-16 mt-16">
//                         Add <i class="ph ph-shopping-cart"></i> 
//                     </a>
//                     <a onClick={() => navigate('/productDetails')} class="product-card__thumb flex-center">
//                         <img src="assets/images/thumbs/product-img6.png" alt="" />
//                     </a>
//                     <div class="product-card__content mt-12">
//                         <div class="product-card__price mb-16">
//                             <span class="text-gray-400 text-md fw-semibold text-decoration-line-through"> $28.99</span>
//                             <span class="text-heading text-md fw-semibold ">$14.99 <span class="text-gray-500 fw-normal">/Qty</span> </span>
//                         </div>
//                         <div class="flex-align gap-6">
//                             <span class="text-xs fw-bold text-gray-600">4.8</span>
//                             <span class="text-15 fw-bold text-warning-600 d-flex"><i class="ph-fill ph-star"></i></span>
//                             <span class="text-xs fw-bold text-gray-600">(17k)</span>
//                         </div>
//                         <h6 class="title text-lg fw-semibold mt-12 mb-8">
//                             <a onClick={() => navigate('/productDetails')} class="link text-line-2">Taylor Farms Broccoli Florets Vegetables</a>
//                         </h6>
//                         <div class="flex-align gap-4">
//                             <span class="text-main-600 text-md d-flex"><i class="ph-fill ph-storefront"></i></span>
//                             <span class="text-gray-500 text-xs">By Lucky Supermarket</span>
//                         </div>
//                         <div class="mt-12">
//                             <div class="progress w-100  bg-color-three rounded-pill h-4" role="progressbar" aria-label="Basic example" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
//                                 <div class="progress-bar bg-main-600 rounded-pill" style={{ width: '35%' }}></div>
//                             </div>
//                             <span class="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
//   );
// };

// export default HomeProduct;




// _____________________________________________ Mapping Data ___________________________________________________


import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const HomeProduct = ({ products }) => {
    const navigate = useNavigate();

    // Default products in case no products are provided
    const defaultProducts = [
        {
            id: 1,
            image: "assets/images/thumbs/product-img1.png",
            originalPrice: 28.99,
            salePrice: 14.99,
            title: "Three Piece Suit from Alkaram",
        },
        {
            id: 2,
            image: "assets/images/thumbs/product-img2.png",
            originalPrice: 28.99,
            salePrice: 14.99,
            title: "Jackquard Kurti from J.",
        },
        {
            id: 3,
            image: "assets/images/thumbs/product-img3.png",
            originalPrice: 28.99,
            salePrice: 14.99,
            title: "Three Piece Suit from Alkaram",
        },
        {
            id: 4,
            image: "assets/images/thumbs/product-img1.png",
            originalPrice: 28.99,
            salePrice: 14.99,
            title: "Three Piece Suit from Zeen",
        },
        {
            id: 5,
            image: "assets/images/thumbs/product-img5.png",
            originalPrice: 28.99,
            salePrice: 14.99,
            title: "Printed Kurti from Sapphire",
        },
        {
            id: 6,
            image: "assets/images/thumbs/product-img6.png",
            originalPrice: 28.99,
            salePrice: 14.99,
            title: "Hoodie from Outfitters",
        }
    ];

    const productList = products && products.length > 0 ? products : defaultProducts;

    return (
        <div className="product mt-24">
            <div className="container container-lg">
                <div className="row gy-4 g-12">
                    {productList.map((product, index) => (
                        <div 
                            key={product.id} 
                            className="col-xxl-2 col-lg-3 col-sm-4 col-6" 
                            data-aos="fade-up" 
                            data-aos-duration={`${200 + index * 200}`}
                        >
                            <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <a 
                                    href="cart.html" 
                                    className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 position-absolute inset-block-start-0 inset-inline-end-0 me-16 mt-16"
                                >
                                    Add <i className="ph ph-shopping-cart"></i> 
                                </a>
                                
                                <a 
                                    onClick={() => navigate('/productDetails')} 
                                    className="product-card__thumb flex-center"
                                >
                                    <img src={product.image} alt={product.title} />
                                </a>
                                
                                <div className="product-card__content mt-12">
                                    <div className="product-card__price mb-16">
                                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">${product.originalPrice}</span>
                                        <span className="text-heading text-md fw-semibold">${product.salePrice} <span className="text-gray-500 fw-normal">/Qty</span></span>
                                    </div>
                                    
                                    <div className="flex-align gap-6"><span className="text-15 fw-bold text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span></div>
                                    
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <a 
                                            onClick={() => navigate('/productDetails')} 
                                            className="link text-line-2"
                                        >
                                            {product.title}
                                        </a>
                                    </h6>
                                    
                                    
                                    
                                    <div className="mt-12">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// PropTypes for type checking
HomeProduct.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            originalPrice: PropTypes.number.isRequired,
            salePrice: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    )
};

export default HomeProduct;