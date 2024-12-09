// import React from 'react';

// const PromotionalSection = () => {
//   return (
//     <section class="promotional-banner pt-80">
//     <div class="container container-lg">
//         <div class="row gy-4">
//             <div class="col-xl-3 col-sm-6 col-xs-6 wow bounceIn" data-aos="fade-up" data-aos-duration="400">
//                 <div class="promotional-banner-item position-relative rounded-24 overflow-hidden z-1">
//                     <img src="assets/images/thumbs/promotional-banner-img1.png" alt="" class="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1" />
//                     <div class="promotional-banner-item__content">
//                         <h6 class="promotional-banner-item__title text-32">Everyday Fresh Meat</h6>
//                         <a href="shop.html" class="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24">
//                             Shop Now
//                             <span class="icon text-xl d-flex"><i class="ph ph-arrow-right"></i></span> 
//                         </a>
//                     </div>
//                 </div>
//             </div>
//             <div class="col-xl-3 col-sm-6 col-xs-6 wow bounceIn" data-aos="fade-up" data-aos-duration="600">
//                 <div class="promotional-banner-item position-relative rounded-24 overflow-hidden z-1">
//                     <img src="assets/images/thumbs/promotional-banner-img2.png" alt="" class="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1" />
//                     <div class="promotional-banner-item__content">
//                         <h6 class="promotional-banner-item__title text-32">Daily Fresh Vegetables</h6>
//                         <a href="shop.html" class="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24">
//                             Shop Now
//                             <span class="icon text-xl d-flex"><i class="ph ph-arrow-right"></i></span> 
//                         </a>
//                     </div>
//                 </div>
//             </div>
//             <div class="col-xl-3 col-sm-6 col-xs-6 wow bounceIn" data-aos="fade-up" data-aos-duration="800">
//                 <div class="promotional-banner-item position-relative rounded-24 overflow-hidden z-1">
//                     <img src="assets/images/thumbs/promotional-banner-img3.png" alt="" class="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1" />
//                     <div class="promotional-banner-item__content">
//                         <h6 class="promotional-banner-item__title text-32">Everyday Fresh Milk</h6>
//                         <a href="shop.html" class="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24">
//                             Shop Now
//                             <span class="icon text-xl d-flex"><i class="ph ph-arrow-right"></i></span> 
//                         </a>
//                     </div>
//                 </div>
//             </div>
//             <div class="col-xl-3 col-sm-6 col-xs-6 wow bounceIn" data-aos="fade-up" data-aos-duration="1000">
//                 <div class="promotional-banner-item position-relative rounded-24 overflow-hidden z-1">
//                     <img src="assets/images/thumbs/promotional-banner-img4.png" alt="" class="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1" />
//                     <div class="promotional-banner-item__content">
//                         <h6 class="promotional-banner-item__title text-32">Everyday Fresh Fruits</h6>
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

// export default PromotionalSection;




// __________________________________ Mapping Code ____________________________________________________


import React from 'react';

const PromotionalSection = () => {
  const promotionalItems = [
    {
      imageSrc: 'assets/images/thumbs/promotional-banner-img1.png',
      title: 'KababJees Sale',
      link: 'shop.html',
      animationDuration: 400,
    },
    {
      imageSrc: 'assets/images/thumbs/promotional-banner-img2.png',
      title: 'Pizza Point Sale',
      link: 'shop.html',
      animationDuration: 600,
    },
    {
      imageSrc: 'assets/images/thumbs/promotional-banner-img3.png',
      title: 'Angethi Sale',
      link: 'shop.html',
      animationDuration: 800,
    },
    {
      imageSrc: 'assets/images/thumbs/promotional-banner-img4.png',
      title: 'Broast Sale',
      link: 'shop.html',
      animationDuration: 1000,
    },
  ];

  return (
    <section className="promotional-banner pt-80">
      <div className="container container-lg">
        <div className="row gy-4">
          {promotionalItems.map((item, index) => (
            <div
              key={index}
              className="col-xl-3 col-sm-6 col-xs-6 wow bounceIn"
              data-aos="fade-up"
              data-aos-duration={item.animationDuration}
            >
              <div className="promotional-banner-item position-relative rounded-24 overflow-hidden z-1">
                <img
                  src={item.imageSrc}
                  alt=""
                  className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
                />
                <div className="promotional-banner-item__content">
                  <h6 className="promotional-banner-item__title text-32">{item.title}</h6>
                  <a
                    href={item.link}
                    className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-74"
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

export default PromotionalSection;
