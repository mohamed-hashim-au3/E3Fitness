import React from "react";
import Header from "./common/Header";
import BannerSection from "./PowerZoneSection/BannerSection";
import BookingClassSection from "./PowerZoneSection/BookingClassSection";
import ContentSection from "./PowerZoneSection/ContentSection";
import Footer from "./common/Footer";
function PowerZone() {
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

export default PowerZone;
