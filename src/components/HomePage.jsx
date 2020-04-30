import React from "react";
import Header from "./common/Header";
import UpcomingClassSection from "./HomeSection/UpcomingClassSection";
import BookingBanner from "./common/BookingBanner";
import LatestPostSection from "./HomeSection/LatestPostsSection";
import Footer from "./common/Footer";
function HomePage() {
  return (
    <>
      <Header />
      <UpcomingClassSection />
      <BookingBanner />
      <LatestPostSection />
      <Footer />
    </>
  );
}

export default HomePage;
