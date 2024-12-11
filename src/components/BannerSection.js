import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const imageUrls = [
    "https://angeethipk.com//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1662114496-Header-02.jpg%3Fver%3D10&w=3840&q=90",
    "https://angeethipk.com//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1662114503-Header-03.jpg%3Fver%3D10&w=3840&q=90",
    "https://www.delizia.pk//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1673694005-1.png%3Fver%3D10&w=3840&q=90",
    "https://www.delizia.pk//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1673694012-2-(1).png%3Fver%3D10&w=3840&q=90",
    "https://foodsinn.co//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1728387888-Foods-Inn-Banner-(1)Artboard-1-copy-3.jpg%3Fver%3D10&w=3840&q=90",
    "https://foodsinn.co//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1728387899-Foods-Inn-Banner-(1)Artboard-1-copy-2.jpg%3Fver%3D10&w=3840&q=90",
    "https://foodsinn.co//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1728387904-Foods-Inn-Banner-(1)Artboard-1-copy.jpg%3Fver%3D10&w=3840&q=90",
    "https://foodsinn.co//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1728387909-Foods-Inn-Banner-(1)Artboard-1.jpg%3Fver%3D10&w=3840&q=90",
    "https://www.ginsoy.com//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1728387888-Foods-Inn-Banner-(1)Artboard-1-copy-3.jpg%3Fver%3D10&w=3840&q=90",
    "https://www.ginsoy.com//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1728387899-Foods-Inn-Banner-(1)Artboard-1-copy-2.jpg%3Fver%3D10&w=3840&q=90",
    "https://www.ginsoy.com//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1728387904-Foods-Inn-Banner-(1)Artboard-1-copy.jpg%3Fver%3D10&w=3840&q=90",
    "https://www.ginsoy.com//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1728387909-Foods-Inn-Banner-(1)Artboard-1.jpg%3Fver%3D10&w=3840&q=90",
    "https://hot-nspicy.com//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1693313374-2.jpg%3Fver%3D10&w=3840&q=90",
    "https://hot-nspicy.com//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1693313378-3.jpg%3Fver%3D10&w=3840&q=90",
    "https://www.kababjeesfriedchicken.com//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1731059503-indolj-cover.jpg%3Fver%3D10&w=3840&q=90",
    "https://www.karachibroast.co//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1721975570-Web-Banner-(2).JPG%3Fver%3D10&w=3840&q=90",
    "https://www.karachibroast.co//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1721976639-WhatsApp-Image-2024-07-26-at-11.48.52-AM.jpeg%3Fver%3D10&w=3840&q=90",
    "https://www.karachibroast.co//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1721976646-WhatsApp-Image-2024-07-26-at-11.48.52-AM-(1).jpeg%3Fver%3D10&w=3840&q=90",
    "https://www.karachibroast.co//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1721976653-WhatsApp-Image-2024-07-26-at-11.48.53-AM.jpeg%3Fver%3D10&w=3840&q=90",
    "https://www.kaybees.com.pk//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1731151672-WhatsApp-Image-2024-11-09-at-4.13.51-AM.jpeg%3Fver%3D10&w=3840&q=90",
    "https://www.kaybees.com.pk//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1729153473-Header-1.jpg%3Fver%3D10&w=3840&q=90",
    "https://www.kaybees.com.pk//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1729150539-Header-2.jpg%3Fver%3D10&w=3840&q=90",
    "https://www.kaybees.com.pk//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1729153477-Header-3.jpg%3Fver%3D10&w=3840&q=90",
    "https://www.pizzapoint.com.pk//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1728632500-Main-Banner-1.jpg%3Fver%3D10&w=3840&q=90",
    "https://www.pizzapoint.com.pk//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1728632547-Main-Banner-2.jpg%3Fver%3D10&w=3840&q=90",
    "https://www.pizzapoint.com.pk//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1729059911-pp-banner.jpg%3Fver%3D10&w=3840&q=90",
    "https://www.pizzapoint.com.pk//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1731072975-Pizza-Point.jpg%3Fver%3D10&w=3840&q=90",
    "https://jhr.tooso.pk//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1727443445-20-BANNER.jpg%3Fver%3D10&w=3840&q=90"
  ];

const BannerSection = () => {
 
  const [currentImageUrl, setCurrentImageUrl] = useState(imageUrls[0]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
   
    afterChange: (currentSlide) => {
      const newImageUrl = imageUrls[currentSlide % imageUrls.length];
      setCurrentImageUrl(newImageUrl);
      console.log('Current Image URL:', newImageUrl);
    }
  };

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button 
        type="button" 
        id="banner-next" 
        className="slick-next slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1"
        onClick={onClick}
      >
        <i className="ph ph-caret-right"></i>
      </button>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button 
        type="button" 
        id="banner-prev" 
        className="slick-prev slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1"
        onClick={onClick}
      >
        <i className="ph ph-caret-left"></i>
      </button>
    );
  }

  return (
    <div className="banner">
        <div className="container container-lg">
            <div className="banner-item rounded-24 overflow-hidden position-relative arrow-center">
                <a href="#featureSection" className="scroll-down w-84 h-84 text-center flex-center bg-main-600 rounded-circle border border-5 text-white border-white position-absolute start-50 translate-middle-x bottom-0 hover-bg-main-800">
                    <span className="icon line-height-0"><i className="ph ph-caret-double-down"></i></span> 
                </a>
                
            <img src={currentImageUrl} alt="" className="banner-img position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1 object-fit-cover rounded-24" />
    
                <div className="banner-slider-wrapper">
                    <Slider {...settings}>
                        <div className="banner-slider__item">   
                            <div className="banner-slider__inner flex-between position-relative">
                                <div className="banner-item__content">
                                    <h1 className="banner-item__title wow bounceInDown "  data-wow-duration="1s">                                       </h1>
                                </div>
                            </div>
                        </div>
                        <div className="banner-slider__item">   
                            <div className="banner-slider__inner flex-between position-relative">
                                <div className="banner-item__content">
                                    <h1 className="banner-item__title wow bounceInDown"  data-wow-duration="1s">                                         </h1>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BannerSection;