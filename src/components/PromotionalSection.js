// __________________________________ Mapping Code ____________________________________________________


import React from 'react';
import saya from './Promotional_Products/saya.webp';
import khaddi from './Promotional_Products/khaddi.webp';
import zeen from './Promotional_Products/zeen.webp';
import ethenic from './Promotional_Products/ethenic.webp';

const PromotionalSection = () => {
  const promotionalItems = [
    {
      imageSrc: saya,
      title: '',
      animationDuration: 400,
    },
    {
      imageSrc: khaddi,
      title: '',
      animationDuration: 600,
    },
    {
      imageSrc: zeen,
      title: '',
      animationDuration: 800,
    },
    {
      imageSrc: ethenic,
      title: '',
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionalSection;
