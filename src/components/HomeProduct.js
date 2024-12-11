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
            image: "data:image/jpeg;base64,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",
            originalPrice: 28.99,
            salePrice: 14.99,
            title: "Three Piece Suit from Alkaram",
        },
        {
            id: 2,
            image: "https://saraclothes.com/cdn/shop/products/1_900x_00b988ce-d982-4719-be95-957c8be900b1.jpg?v=1636211147",
            originalPrice: 28.99,
            salePrice: 14.99,
            title: "Jackquard Kurti from J.",
        },
        {
            id: 3,
            image: "https://www.hdcollection.com.pk/cdn/shop/products/ss-7.1-22-3-red-1_9nk41dbkupwvnqiu.jpg?v=1668578375&width=1445",
            originalPrice: 28.99,
            salePrice: 14.99,
            title: "Three Piece Suit from Alkaram",
        },
        {
            id: 4,
            image: "https://zeenwoman.com/cdn/shop/files/WOM34118.jpg?v=1717570202&width=600",
            originalPrice: 28.99,
            salePrice: 14.99,
            title: "Three Piece Suit from Zeen",
        },
        {
            id: 5,
            image: "https://bagallery.com/cdn/shop/products/0PREDAY22V22_3.jpg?v=1657115865",
            originalPrice: 28.99,
            salePrice: 14.99,
            title: "Printed Kurti from Sapphire",
        },
        {
            id: 6,
            image: "https://outfitters.com.pk/cdn/shop/files/F0278107901M_2.jpg?v=1700132756",
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