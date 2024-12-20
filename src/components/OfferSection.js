// import React from 'react';

// const OfferSection = () => {
//   return (
//     <section class="offer pt-80 pb-80">
//     <div class="container container-lg">
//         <div class="row gy-4">
//             <div class="col-sm-6" data-aos="zoom-in" data-aos-duration="600">
//                 <div class="offer-card position-relative rounded-16 bg-main-600 overflow-hidden p-16 flex-align gap-16 flex-wrap z-1">
//                     <img src="assets/images/shape/offer-shape.png" alt="" class="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100 opacity-6" />
//                     <div class="offer-card__thumb d-lg-block d-none">
//                         <img src="assets/images/thumbs/offer-img1.png" alt="" />
//                     </div>
//                     <div class="py-xl-4">
//                         <div class="offer-card__logo mb-16 w-80 h-80 flex-center bg-white rounded-circle">
//                             <img src="assets/images/thumbs/offer-logo.png" alt="" /> 
//                         </div>
//                         <h4 class="text-white mb-8">$5 off your first order</h4>
//                         <div class="flex-align gap-8">
//                             <span class="text-sm text-white">Delivery by 6:15am</span>
//                             <span class="text-sm text-main-two-600">expired Aug 5</span>
//                         </div>
//                         <a href="shop.html" class="mt-16 btn bg-white hover-text-white hover-bg-main-800 text-heading fw-medium d-inline-flex align-items-center rounded-pill gap-8" tabindex="0">
//                             Shop Now
//                             <span class="icon text-xl d-flex"><i class="ph ph-arrow-right"></i></span> 
//                         </a>
//                     </div>
//                 </div>
//             </div>
//             <div class="col-sm-6" data-aos="zoom-in" data-aos-duration="800">
//                 <div class="offer-card position-relative rounded-16 bg-main-600 overflow-hidden p-16 flex-align gap-16 flex-wrap z-1">
//                     <img src="assets/images/shape/offer-shape.png" alt="" class="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100 opacity-6"/>
//                     <div class="offer-card__thumb d-lg-block d-none">
//                         <img src="assets/images/thumbs/offer-img2.png" alt="" />
//                     </div>
//                     <div class="py-xl-4">
//                         <div class="offer-card__logo mb-16 w-80 h-80 flex-center bg-white rounded-circle">
//                             <img src="assets/images/thumbs/offer-logo.png" alt="" /> 
//                         </div>
//                         <h4 class="text-white mb-8">$5 off your first order</h4>
//                         <div class="flex-align gap-8">
//                             <span class="text-sm text-white">Delivery by 6:15am</span>
//                             <span class="text-sm text-main-two-600">expired Aug 5</span>
//                         </div>
//                         <a href="shop.html" class="mt-16 btn bg-white hover-text-white hover-bg-main-800 text-heading fw-medium d-inline-flex align-items-center rounded-pill gap-8" tabindex="0">
//                             Shop Now
//                             <span class="icon text-xl d-flex"><i class="ph ph-arrow-right"></i></span> 
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//  </section>
//   );
// };

// export default OfferSection;




// ________________________________________________ Mapping Data ____________________________________________




import React from 'react';

import b1 from './Banners/b1.png';
import b2 from './Banners/b2.jpg';
import dc_logo from './dc_logo.png'

const OfferSection = () => {
  const offerData = [
    {
      thumbImage: b1,
      title: "Get best deal on your first order",
      expirationDate: "Expires Jan 5",
      ctaLink: "shop.html"
    },
    {
        thumbImage: b2,
        title: "Be a Regular Customer",
        expirationDate: "Expires Jan 5",
        ctaLink: "shop.html"
      }
  ];

  return (
    <section className="offer pt-80 pb-80">
      <div className="container container-lg">
        <div className="row gy-4">
          {offerData.map((offer, index) => (
            <div 
              key={index} 
              className="col-sm-6 h-100" 
              data-aos="zoom-in" 
              data-aos-duration={`${600 + (index * 200)}`}
            >
              <div className="offer-card position-relative rounded-16 bg-main-600 overflow-hidden p-16 flex-align gap-16 flex-wrap z-1 h-100 d-flex flex-column justify-content-between">
                <img 
                  src="assets/images/shape/offer-shape.png" 
                  alt="" 
                  className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100 opacity-6" 
                />
                <div className="w-100">
                  <div className="offer-card__thumb d-lg-block d-none mb-16 text-center">
                    <img src={offer.thumbImage} alt="Offer Thumbnail" className="mx-auto" />
                  </div>
                  <div className="py-xl-4">
                    <div className="offer-card__logo mb-16 w-80 h-80 flex-center bg-white rounded-circle mx-auto">
                      <img src={dc_logo} alt="Logo" /> 
                    </div>
                    <h4 className="text-white mb-8 text-center">{offer.title}</h4>
                    <div className="flex-align gap-8 justify-content-center">
                      <span className="text-sm text-main-two-600">{offer.expirationDate}</span>
                    </div>
                  </div>
                </div>
                <div className="w-100 mt-auto">
                  <a 
                    href={offer.ctaLink} 
                    className="btn bg-white hover-text-white hover-bg-main-800 text-heading fw-medium d-inline-flex align-items-center rounded-pill gap-8 w-100 justify-content-center" 
                    tabIndex="0"
                  >
                    Shop Now
                    <span className="icon text-xl d-flex"><i className="ph ph-arrow-right"></i></span> 
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

export default OfferSection;