import React from "react";
import Header from "./common/Header";
import BannerSection from "./BlogPageSection/BannerSection";
import BookingBanner from "./common/BookingBanner";
import LatestNesSection from "./BlogPageSection/LatestNewsSection";
import FoodSection from "./BlogPageSection/FoodSection";
import Covid19Section from "./BlogPageSection/Covid19Section";
import StyleAndGearSection from "./BlogPageSection/StyleAndGearSection";
import HealthSection from "./BlogPageSection/HealthSection";
import Footer from "./common/Footer";
function BlogPage() {
  return (
    <>
      <Header />
      <BannerSection />
      <BookingBanner />
      <LatestNesSection />
      <FoodSection />
      <Covid19Section />
      <StyleAndGearSection />
      <HealthSection />
      <Footer />
    </>
  );
}

export default BlogPage;
