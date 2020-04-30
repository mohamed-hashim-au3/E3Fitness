import React from "react";
import Header from "./common/Header";
import BannerSection from "./YouthClassSection/BannerSection";
import ContentSection from "./YouthClassSection/ContentSection";
import CategoryHeader from "./YouthClassSection/CategoryHeader";
import CategorySection from "./YouthClassSection/CategorySection";
import Footer from "./common/Footer";
function YouthClass() {
  return (
    <>
      <Header />
      <BannerSection />
      <ContentSection />
      <CategoryHeader />
      <CategorySection />
      <Footer />
    </>
  );
}

export default YouthClass;
