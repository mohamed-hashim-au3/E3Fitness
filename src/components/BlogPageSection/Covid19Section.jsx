import React from "react";
import img1 from "../../assets/images/covidimg1.jpg";
import img2 from "../../assets/images/covidimg2.jpg";
import img3 from "../../assets/images/covidimg5.jpg";
import img4 from "../../assets/images/covidimg4.jpg";

function Covid19Section() {
  return (
    <>
      <section className="food-diet-news relative">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
              <div className="heading-part relative">
                <h1 className="black-text">COVID 19</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="latest-feed">
        <div className="container">
          <div className="row">
            <div
              className="col-md-3 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".5s"
            >
              <div className="feed-images">
                <div className="inner-content">
                  <img src={img1} alt="" />
                  <p>Lorem Ipsum has been the industry Lorem Ipsum has </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".5s"
            >
              <div className="feed-images">
                <div className="inner-content">
                  <img src={img2} alt="" />
                  <p>Lorem Ipsum has been the industry Lorem Ipsum has </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".5s"
            >
              <div className="feed-images">
                <div className="inner-content">
                  <img src={img3} alt="" />
                  <p>Lorem Ipsum has been the industry Lorem Ipsum has </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".5s"
            >
              <div className="feed-images">
                <div className="inner-content">
                  <img src={img4} alt="" />
                  <p>Lorem Ipsum has been the industry Lorem Ipsum has </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Covid19Section;
