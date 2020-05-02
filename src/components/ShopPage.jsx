import React from "react";
import Header from "./common/Header";
import BannerSection from "./ShopPageSection/BannerSection";
import ProductListingSection from "./ShopPageSection/ProductListingSection";
import Footer from "./common/Footer";
function ShopPage() {
  return (
    <>
      <Header />
      <BannerSection />
      <ProductListingSection />
      <Footer />
    </>
  );
}

export default ShopPage;
