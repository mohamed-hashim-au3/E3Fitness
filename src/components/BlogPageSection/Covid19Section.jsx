import React from "react";
import img1 from "../../assets/images/covid-1.jpg";
import img2 from "../../assets/images/covid-2.jpg";
import img3 from "../../assets/images/covid-3.jpg";
import img4 from "../../assets/images/covid-4.jpg";

function Covid19Section() {
  return (
    <>
      <section class="food-diet-news relative">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
              <div class="heading-part relative">
                <h1 class="black-text">COVID 19</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="latest-feed">
        <div class="container">
          <div class="row">
            <div
              class="col-md-3 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".5s"
            >
              <div class="feed-images">
                <div class="inner-content">
                  <img src={img1} alt="" />
                  <p>Lorem Ipsum has been the industry Lorem Ipsum has </p>
                </div>
              </div>
            </div>
            <div
              class="col-md-3 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".5s"
            >
              <div class="feed-images">
                <div class="inner-content">
                  <img src={img2} alt="" />
                  <p>Lorem Ipsum has been the industry Lorem Ipsum has </p>
                </div>
              </div>
            </div>
            <div
              class="col-md-3 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".5s"
            >
              <div class="feed-images">
                <div class="inner-content">
                  <img src={img3} alt="" />
                  <p>Lorem Ipsum has been the industry Lorem Ipsum has </p>
                </div>
              </div>
            </div>
            <div
              class="col-md-3 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".5s"
            >
              <div class="feed-images">
                <div class="inner-content">
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
