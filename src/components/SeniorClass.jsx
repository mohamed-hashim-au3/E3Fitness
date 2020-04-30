import React from "react";
import Header from "./common/Header";
import BannerSection from "./SeniorClassSection/BannerSection";
import ContentSection from "./SeniorClassSection/ContentSection";
import CategoryHeader from "./SeniorClassSection/CategoryHeader";
import CategorySection from "./SeniorClassSection/CategorySection";
import Footer from "./common/Footer";
function SeniorClass() {
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

export default SeniorClass;
