// import React from 'react';

// const FlashSale = () => {
//   return (
//     <section class="flash-sales pt-80 overflow-hidden">
//     <div class="container container-lg">
//         <div class="section-heading">
//             <div class="flex-between flex-wrap gap-8">
//                 <h5 class="mb-0 wow bounceInLeft">Today's Best Deals</h5>
//                 <div class="flex-align gap-16 wow bounceInRight">
//                     <a href="shop.html" class="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline">View All Deals</a>
//                     <div class="flex-align gap-8">
//                         <button type="button" id="flash-prev" class="slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1">
//                             <i class="ph ph-caret-left"></i>
//                         </button>
//                         <button type="button" id="flash-next" class="slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1">
//                             <i class="ph ph-caret-right"></i>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="flash-sales__slider arrow-style-two">
//             <div class="" data-aos="fade-up" data-aos-duration="600">
//                 <div class="flash-sales-item rounded-16 overflow-hidden z-1 position-relative flex-align flex-0 justify-content-between gap-8">
//                     <img src="assets/images/bg/flash-sale-bg1.png" alt="" class="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1 flash-sales-item__bg" />
//                     <div class="flash-sales-item__thumb d-sm-block d-none">
//                         <img src="assets/images/thumbs/flash-sale-img1.png" alt="" />
//                     </div>
//                     <div class="flash-sales-item__content ms-sm-auto">
//                         <h6 class="text-32 mb-20">Vegetables</h6>
//                         <div class="countdown" id="countdown1">
//                             <ul class="countdown-list flex-align flex-wrap">
//                                 <li class="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium"><span class="days"></span>Days</li>
//                                 <li class="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium"><span class="hours"></span>Hours</li>
//                                 <li class="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium"><span class="minutes"></span>Min</li>
//                                 <li class="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium"><span class="seconds"></span>Sec</li>
//                             </ul>
//                         </div>
//                         <a href="shop.html" class="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24">
//                             Shop Now
//                             <span class="icon text-xl d-flex"><i class="ph ph-arrow-right"></i></span> 
//                         </a>
//                     </div>
//                 </div>
//             </div>
//             <div class="" data-aos="fade-up" data-aos-duration="1000">
//                 <div class="flash-sales-item rounded-16 overflow-hidden z-1 position-relative flex-align flex-0 justify-content-between gap-8">
//                     <img src="assets/images/bg/flash-sale-bg2.png" alt="" class="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1 flash-sales-item__bg" />
//                     <div class="flash-sales-item__thumb d-sm-block d-none">
//                         <img src="assets/images/thumbs/flash-sale-img2.png" alt="" />
//                     </div>
//                     <div class="flash-sales-item__content ms-sm-auto">
//                         <h6 class="text-32 mb-20">Junk Food</h6>
//                         <div class="countdown" id="countdown2">
//                             <ul class="countdown-list flex-align flex-wrap">
//                                 <li class="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium"><span class="days"></span>Days</li>
//                                 <li class="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium"><span class="hours"></span>Hours</li>
//                                 <li class="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium"><span class="minutes"></span>Min</li>
//                                 <li class="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium"><span class="seconds"></span>Sec</li>
//                             </ul>
//                         </div>
//                         <a href="shop.html" class="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24">
//                             Shop Now
//                             <span class="icon text-xl d-flex"><i class="ph ph-arrow-right"></i></span> 
//                         </a>
//                     </div>
//                 </div>
//             </div>
//             <div class="" data-aos="fade-up" data-aos-duration="1400">
//                 <div class="flash-sales-item rounded-16 overflow-hidden z-1 position-relative flex-align flex-0 justify-content-between gap-8">
//                     <img src="assets/images/bg/flash-sale-bg2.png" alt="" class="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1 flash-sales-item__bg" />
//                     <div class="flash-sales-item__thumb d-sm-block d-none">
//                         <img src="assets/images/thumbs/flash-sale-img2.png" alt="" />
//                     </div>
//                     <div class="flash-sales-item__content ms-sm-auto">
//                         <h6 class="text-32 mb-20">Healthy Fo</h6>
//                         <div class="countdown" id="countdown3">
//                             <ul class="countdown-list flex-align flex-wrap">
//                                 <li class="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium"><span class="days"></span>Days</li>
//                                 <li class="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium"><span class="hours"></span>Hours</li>
//                                 <li class="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium"><span class="minutes"></span>Min</li>
//                                 <li class="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium"><span class="seconds"></span>Sec</li>
//                             </ul>
//                         </div>
//                         <a href="shop.html" class="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24">
//                             Shop Now
//                             <span class="icon text-xl d-flex"><i class="ph ph-arrow-right"></i></span> 
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>
//   );
// };

// export default FlashSale;




// _________________________________________  Mapping Data ___________________________________________________________


import React from 'react';
import PropTypes from 'prop-types';

const FlashSale = ({ items }) => {
  // Default items if no items are provided
  const defaultItems = [
    {
      title: 'Food',
      backgroundImage: 'assets/images/bg/flash-sale-bg1.png',
      thumbImage: 'assets/images/thumbs/flash-sale-img1.png',
      shopLink: 'shop.html'
    },
    {
      title: 'Clothing',
      backgroundImage: 'assets/images/bg/flash-sale-bg2.png',
      thumbImage: 'assets/images/thumbs/flash-sale-img2.png',
      shopLink: 'shop.html'
    },
    {
      title: 'Food',
      backgroundImage: 'assets/images/bg/flash-sale-bg2.png',
      thumbImage: 'assets/images/thumbs/flash-sale-img2.png',
      shopLink: 'shop.html'
    }
  ];

  // Use provided items or default items
  const flashSaleItems = items && items.length > 0 ? items : defaultItems;

  return (
    <section className="flash-sales pt-80 overflow-hidden">
      <div className="container container-lg">
        <div className="section-heading">
          <div className="flex-between flex-wrap gap-8">
            <h5 className="mb-0 wow bounceInLeft">Today's Best Deals</h5>
            <div className="flex-align gap-16 wow bounceInRight">
              <a href="shop.html" className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline">View All Deals</a>
              <div className="flex-align gap-8">
                <button type="button" id="flash-prev" className="slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1">
                  <i className="ph ph-caret-left"></i>
                </button>
                <button type="button" id="flash-next" className="slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1">
                  <i className="ph ph-caret-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flash-sales__slider arrow-style-two">
          {flashSaleItems.map((item, index) => (
            <div key={index} className="" data-aos="fade-up" data-aos-duration={`${600 + index * 400}`}>
              <div className="flash-sales-item rounded-16 overflow-hidden z-1 position-relative flex-align flex-0 justify-content-between gap-8">
                <img 
                  src={item.backgroundImage} 
                  alt="" 
                  className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1 flash-sales-item__bg" 
                />
                <div className="flash-sales-item__thumb d-sm-block d-none">
                  <img src={item.thumbImage} alt="" />
                </div>
                <div className="flash-sales-item__content ms-sm-auto">
                  <h6 className="text-32 mb-20">{item.title}</h6>
                  <div className="countdown" id={`countdown${index + 1}`}>
                    <ul className="countdown-list flex-align flex-wrap">
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
                  </div>
                  <a 
                    href={item.shopLink || "shop.html"} 
                    className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24"
                  >
                    Shop Now
                    <span className="icon text-xl d-flex">
                      <i className="ph ph-arrow-right"></i>
                    </span> 
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// PropTypes for type checking
FlashSale.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
      thumbImage: PropTypes.string.isRequired,
      shopLink: PropTypes.string
    })
  )
};

export default FlashSale;
