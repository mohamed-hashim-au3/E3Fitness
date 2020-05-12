import React from "react";
import Header from "../containers/common/Header";
import UpcomingClassSection from "./HomeSection/UpcomingClassSection";
import BookingBanner from "./common/BookingBanner";
import LatestPostSection from "./HomeSection/LatestPostsSection";
import Footer from "./common/Footer";
function HomePage(props) {
  React.useEffect(() => {
    console.log(props.login);
  }, []);
  return (
    <>
      <Header login={props.login} />
      <UpcomingClassSection />
      <BookingBanner />
      <LatestPostSection />
      <Footer />
    </>
  );
}

export default HomePage;
