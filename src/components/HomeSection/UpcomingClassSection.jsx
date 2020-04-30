import React, { useEffect } from "react";
import img1 from "../../assets/images/up-one.jpg";
import img2 from "../../assets/images/up-two.jpg";
import img3 from "../../assets/images/up-three.jpg";
import img4 from "../../assets/images/up-four.jpg";
import img5 from "../../assets/images/up-five.jpg";
import WOW from "wowjs";
import { ReactComponent as Moree } from "../../assets/images/moree.svg";
function UpcomingClassSection() {
  useEffect(() => {
    const wow = new WOW.WOW();
    // ---- ^^ const wow = WOW(); maybe new syntax, check docs! ^^----
    wow.init();
  }, []);
  return (
    <>
      <div className="container-fluid main-banner">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-xs-12 img-fluid"></div>
        </div>
      </div>
      <section className="relative">
        <div className="container-fluid upcoming-class">
          <h1 className="light-blue">Upcoming Classes</h1>
          <div className="row text-center ">
            <div
              className="col-sm upcoming-container wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <img src={img1} alt="Clasesbanner" className="img-fluid" />
              <h3 className="blue-text">Power ZONE</h3>
              <p>20/04/2020</p>
              <span className="img-fluid more-item">
                <Moree />
              </span>
            </div>
            <div
              className="col-sm  upcoming-container wow fadeInUp  "
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <img src={img2} alt="" className="img-fluid" />
              <h3 className="blue-text">Power HIT</h3>
              <p>20/04/2020</p>
              <span className="img-fluid more-item">
                <Moree />
              </span>
            </div>
            <div
              className="col-sm  upcoming-container wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <img src={img3} alt="" className="img-fluid" />
              <h3 className="blue-text">Power CORE</h3>
              <p>20/04/2020</p>
              <span className="img-fluid more-item">
                <Moree />
              </span>
            </div>
            <div
              className="col-sm  upcoming-container wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <img src={img4} alt="" className="img-fluid" />
              <h3 className="blue-text">Power CARDIO</h3>
              <p>20/04/2020</p>
              <span className="img-fluid more-item">
                <Moree />
              </span>
            </div>
            <div
              className="col-sm  upcoming-container wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <img src={img5} alt="" className="img-fluid" />
              <h3 className="blue-text">Power ZEN</h3>
              <p>20/04/2020</p>
              <span className="img-fluid more-item">
                <Moree />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UpcomingClassSection;
