// ____________________________ Mapping Code _____________________________________________________________

import React from 'react';

import dhanak from './Feature_Products/dhanak.png';
import alkaram from './Feature_Products/ak2.png';
import zeen from './Feature_Products/zeen2.png';
import saya from './Feature_Products/saya.png';
import khaddi from './Feature_Products/khaddi2.png';
import zelbury from './Feature_Products/zell.png';
import outfitters from './Feature_Products/out2.png';
import junaid from './Feature_Products/junaid2.png';
import sana from './Feature_Products/sanasafinaz.png';
import agha from './Feature_Products/agha2.png';
import noor from './Feature_Products/noor2.png';


const featureItems = [
  { title: 'Dhanak', imgSrc: dhanak, delay: 400 },
  { title: 'Alkaram', imgSrc: alkaram, delay: 600 },
  { title: 'Zeen', imgSrc: zeen, delay: 800 },
  { title: 'Saya', imgSrc: saya, delay: 1000 },
  { title: 'Khaddi', imgSrc: khaddi, delay: 1200 },
  { title: 'Zelbury', imgSrc: zelbury, delay: 1400 },
  { title: 'Outfitters', imgSrc: outfitters, delay: 1600 },
  { title: 'J.', imgSrc: junaid , delay: 1800 },
  { title: 'Sana Safinaz', imgSrc: sana, delay: 2000 },
  { title: 'Agha Noor', imgSrc: agha, delay: 2200 },
  { title: 'Noor', imgSrc: noor, delay: 2400 },
];

const FeatureSection = () => {
  return (
    <div className="feature" id="featureSection">
      <div className="container container-lg">
        <div className="position-relative arrow-center">
          <div className="flex-align">
            <button
              type="button"
              id="feature-item-wrapper-prev"
              className="slick-prev slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1"
            >
              <i className="ph ph-caret-left"></i>
            </button>
            <button
              type="button"
              id="feature-item-wrapper-next"
              className="slick-next slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1"
            >
              <i className="ph ph-caret-right"></i>
            </button>
          </div>
          <div className="feature-item-wrapper">
            {featureItems.map((item, index) => (
              <div
                className="feature-item text-center wow bounceIn"
                data-aos="fade-up"
                data-aos-duration={item.delay}
                key={index}
              >
                <div className="feature-item__thumb rounded-circle">
                  <a href="shop.html" className="w-100 h-100 flex-center">
                    <img src={item.imgSrc} alt={item.title} />
                  </a>
                </div>
                <div className="feature-item__content mt-16">
                  <h6 className="text-lg mb-8">
                    <a href="shop.html" className="text-inherit">
                      {item.title}
                    </a>
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

