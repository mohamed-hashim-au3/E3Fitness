import React from "react";
import Header from "./common/Header";
import BannerSection from "./PowerDanceSection/BannerSection";
import BookingClassSection from "./PowerDanceSection/BookingClassSection";
import ContentSection from "./PowerDanceSection/ContentSection";
import Footer from "./common/Footer";
function PowerDance() {
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

export default PowerDance;
