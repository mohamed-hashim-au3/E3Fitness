import React from "react";
import img1 from "../../assets/images/health-1.jpg";
import img2 from "../../assets/images/mini-style-1.jpg";
import img3 from "../../assets/images/mini-style-2.jpg";
import img4 from "../../assets/images/mini-style-3.jpg";
import img5 from "../../assets/images/mini-style-4.jpg";

function StyleAndGearSection() {
  return (
    <>
      <section className="food-diet-news relative">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
              <div className="heading-part relative">
                <h1 className="black-text">STYLE & GEAR</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="latest-feed">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 col-lg-6 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".5s"
            >
              <div className="feed-images">
                <div className="stylegear-container">
                  <div className="inner-part">
                    <img src={img1} alt="" />
                  </div>
                  <div className="inner-part">
                    <img src={img1} alt="" />
                  </div>
                </div>
              </div>
              <h2 className="text-center">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley{" "}
              </h2>
              <p className="text-center">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley{" "}
              </p>
            </div>
            <div
              className="col-md-6 col-lg-6 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".6s"
            >
              <div className="right-side-health-feed">
                <div className="flex-container">
                  <img src={img2} alt="" />
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </div>
                <div className="flex-container">
                  <img src={img3} alt="" />
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </div>
                <div className="flex-container">
                  <img src={img4} alt="" />
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </div>
                <div className="flex-container">
                  <img src={img5} alt="" />
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StyleAndGearSection;
