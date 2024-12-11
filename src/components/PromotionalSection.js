// __________________________________ Mapping Code ____________________________________________________


import React from 'react';

import kababjees from './Promotional_Products/kababjees.png';
import pp from './Promotional_Products/pizzapoint.png';
import angethi from './Promotional_Products/angeethi.png';
import broast from './Promotional_Products/broast.png'

const PromotionalSection = () => {
  const promotionalItems = [
    {
      imageSrc: kababjees,
      title: '',
      link: 'shop.html',
      animationDuration: 400,
    },
    {
      imageSrc: pp,
      title: '',
      link: 'shop.html',
      animationDuration: 600,
    },
    {
      imageSrc: angethi,
      title: '',
      link: 'shop.html',
      animationDuration: 800,
    },
    {
      imageSrc: broast,
      title: '',
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
