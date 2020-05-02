import React from "react";
import imgSports from "../../assets/images/e3-sports.jpg";
function ContentSection() {
  return (
    <>
      <section className="about-content">
        <div className="container-fluid">
          <h1
            className="heading-text-blue wow fadeInUp"
            data-wow-duration="0.5s"
            data-wow-delay="0.5s"
          >
            performance solutions
          </h1>
          <div className="row inner-content">
            <div
              className="col-md-5 col-lg-5 col-sm-5 col-xs-12 wow fadeInLeft"
              data-wow-duration="0.5s"
              data-wow-delay="0.6s"
            >
              <h1 className="white-text">Who We Are</h1>
            </div>
            <div
              className="col-md-7 col-sm-7 col-lg-7 col-xs-12 wow fadeInRight"
              data-wow-duration="0.5s"
              data-wow-delay="0.6s"
            >
              <p>
                Lorem ipsum, or lipsum as it is sometimes known,is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book is dummy text used in
                laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.
              </p>
            </div>
          </div>
          <div className="row inner-content">
            <div
              className="col-md-5 col-lg-5 col-sm-5 col-xs-12 wow fadeInLeft"
              data-wow-duration="0.5s"
              data-wow-delay="0.6s"
            >
              <h1 className="white-text">Why We Started</h1>
            </div>
            <div
              className="col-md-7 col-sm-7 col-lg-7 col-xs-12 wow fadeInRight"
              data-wow-duration="0.5s"
              data-wow-delay="0.6s"
            >
              <p>
                Lorem ipsum, or lipsum as it is sometimes known,is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book is dummy text used in
                laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.
              </p>
            </div>
          </div>
          <div className="row inner-content">
            <div
              className="col-md-5 col-lg-5 col-sm-5 col-xs-12 wow fadeInLeft"
              data-wow-duration="0.5s"
              data-wow-delay="0.6s"
            >
              <h1 className="white-text">Why We Started</h1>
            </div>
            <div
              className="col-md-7 col-sm-7 col-lg-7 col-xs-12 wow fadeInRight"
              data-wow-duration="0.5s"
              data-wow-delay="0.6s"
            >
              <p>
                Lorem ipsum, or lipsum as it is sometimes known,is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book is dummy text used in
                laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.
              </p>
            </div>
          </div>

          <div
            className="row text-center sports-image wow fadeInUp"
            data-wow-duration="0.5s"
            data-wow-delay="0.6s"
          >
            <div className="col-md-12 col-lg-12 col-xs-12">
              <img src={imgSports} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContentSection;
