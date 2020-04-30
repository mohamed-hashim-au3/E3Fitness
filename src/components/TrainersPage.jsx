import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import BannerSection from "./TrainersSection/BannerSection";
import MainGridSection from "./TrainersSection/MainGridSection";
function TrainersPage() {
  return (
    <>
      <Header />
      <BannerSection />
      <MainGridSection />
      <Footer />
    </>
  );
}

export default TrainersPage;
