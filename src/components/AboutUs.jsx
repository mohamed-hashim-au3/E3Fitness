import React from "react";
import Header from "./common/Header";
import BannerSection from "./AboutUsSection/BannerSection";
import ContentSection from "./AboutUsSection/ContentSection";
import BookingBanner from "./common/BookingBanner";
import Footer from "./common/Footer";
function AboutUs() {
  return (
    <> 
      <Header />
      <BannerSection />
      <ContentSection />
      <BookingBanner />
      <Footer />
    </>
  );
}

export default AboutUs;
