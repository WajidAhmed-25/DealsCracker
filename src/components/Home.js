import React from 'react';
import Preloader from './Preloader';
import ProgressWrap from './ProgressWrap';
import Searchbox from './Searchbox';
import HeaderTop from './HeaderTop';
import HeaderMiddle from './HeaderMiddle';
import HeaderBottom from './HeaderBottom';
import BannerSection from './BannerSection';
import FeatureSection from './FeatureSection';
import PromotionalSection from './PromotionalSection';
import FlashSale from './FlashSale';
import HomeProduct from './HomeProduct';
import OfferSection from './OfferSection';
import RecommendSection from './RecommendSection';
import HotDeals from './HotDeals';
import TopVendorsSection from './TopVendorsSection';
import BestSellerSection from './bestSellerSection';
import DeliverySection from './DeliverySection';
import OrganicFoodSection from './OrganicFoodSection';
import ShortProductSection from './ShortProductSection';
import BrandSection from './BrandSection';
import NewArrivalSection from './NewArrivalSection';
import ShippingSection from './ShippingSection';
import NewsletterSection from './NewsletterSection';
import Footer from './Footer';
import FooterBottom from './FooterBottom';
const Home = () => {
  return (
    <div>
        {/* <Preloader /> */}
        <ProgressWrap />
        <Searchbox />
        <HeaderMiddle />
        <HeaderBottom />


        <BannerSection />
        <FeatureSection />
        <PromotionalSection />
        <FlashSale />
        <HomeProduct />
        <OfferSection />

        
        <RecommendSection />
        <HotDeals />
        <TopVendorsSection />
        <BestSellerSection />
        <DeliverySection />
        <OrganicFoodSection />
        <ShortProductSection />
        <BrandSection />
        <NewArrivalSection />
        <ShippingSection />
        <NewsletterSection />
        <Footer />
        <FooterBottom />
    </div>
  );
};

export default Home;
