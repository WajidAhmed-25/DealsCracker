
import React from 'react';
import PropTypes from 'prop-types';
import pizzapointImage from './FlashSale/pizza.webp';
import tossoImage from './FlashSale/tosso.webp';
import burgerImage from './FlashSale/burger.webp';

const FlashSale = ({ items }) => {
  const defaultItems = [
    {
      backgroundImage: pizzapointImage, 
      thumbImage: pizzapointImage,
    },
    {
      backgroundImage: burgerImage,
      thumbImage: burgerImage,
    },
    {
      backgroundImage: tossoImage, 
      thumbImage: tossoImage,
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
                  <img 
                    src={item.thumbImage} 
                    alt="" 
                    className="w-full h-full object-cover" 
                    style={{ 
                      width: '200px', 
                      height: '200px', 
                      objectFit: 'cover' 
                    }} 
                  />
                </div>
                <div className="flash-sales-item__content ms-sm-auto">
                  {/* Content can be added here if needed */}
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
      backgroundImage: PropTypes.string.isRequired,
      thumbImage: PropTypes.string.isRequired,
    })
  )
};

export default FlashSale;
