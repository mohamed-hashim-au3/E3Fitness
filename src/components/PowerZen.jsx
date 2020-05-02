import React from "react";
import Header from "./common/Header";
import BannerSection from "./PowerZenSection/BannerSection";
import BookingClassSection from "./PowerZenSection/BookingClassSection";
import ContentSection from "./PowerZenSection/ContentSection";
import Footer from "./common/Footer";
function PowerZen() {
  return (
    <>
      <Header />
      <BannerSection />
      <BookingClassSection />
      <ContentSection />
      <Footer />
    </>
  );
}

export default PowerZen;
