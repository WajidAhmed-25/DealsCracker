import React from 'react';
import Preloader from './Preloader';
import ProgressWrap from './ProgressWrap';
import Searchbox from './Searchbox';
import HeaderTop from './HeaderTop';
import HeaderMiddle from './HeaderMiddle';
import HeaderBottom from './HeaderBottom';
import ShippingSection from './ShippingSection';
import NewsletterSection from './NewsletterSection';
import Footer from './Footer';
import FooterBottom from './FooterBottom';

import Breadcrumb from './Breadcrumb';
import ProductDetailsSection from './productDetailsSection';
import SimilarProduct from './SimilarProduct';
const ProductDetails = () => {
  return (
    <div>
        {/* <Preloader /> */}
        <ProgressWrap />
        <Searchbox />
        <HeaderMiddle />
        <HeaderBottom />

        <Breadcrumb />
        <ProductDetailsSection />
        <SimilarProduct />
        
        <ShippingSection />
        <NewsletterSection />
        <Footer />
        <FooterBottom />
    </div>
  );
};

export default ProductDetails;
