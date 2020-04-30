import React from "react";
import Header from "./common/Header";
import BannerSection from "./PowserClassSection/BannerSection";
import BookingBanner from "./common/BookingBanner";
import CategorySection from "./PowserClassSection/CategorySection";
import ContentSection from "./PowserClassSection/ContentSection";
import Footer from "./common/Footer";
function PowerClass() {
  return (
    <>
      <Header />
      <BannerSection />
      <ContentSection />
      <BookingBanner />
      <CategorySection />
      <BookingBanner />
      <Footer />
    </>
  );
}

export default PowerClass;
