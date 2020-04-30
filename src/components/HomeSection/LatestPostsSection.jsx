import React, { useEffect } from "react";
import WOW from "wowjs";
import img1 from "../../assets/images/blog-1.jpg";
import img2 from "../../assets/images/blog-2.jpg";
import img3 from "../../assets/images/blog-3.jpg";
function LatestPostsSection() {
  useEffect(() => {
    const wow = new WOW.WOW();
    // ---- ^^ const wow = WOW(); maybe new syntax, check docs! ^^----
    wow.init();
  }, []);
  return (
    <>
      <section className="latest-post relative ">
        <h1 className="light-blue">Latest Post</h1>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-6 col-lg-6 col-xs-12 blog-content wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <h3 className="blue-text">Power HIT</h3>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book. who is thought to
                have scrambled parts of Cicero's De Finibus Bonorum et Malorum
                for use in a type specimen book.
              </p>
              <br />
              <a href="/" className="white-text readmore-bg">
                Read More
              </a>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xs-12 blog-image wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <img src={img1} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="divider-gap"></div>
          <div className="row">
            <div
              className="col-md-6 col-lg-6 col-xs-12 blog-content wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <h3 className="blue-text">Excercise for body</h3>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book. who is thought to
                have scrambled parts of Cicero's De Finibus Bonorum et Malorum
                for use in a type specimen book.
              </p>
              <br />
              <a href="/" className="white-text readmore-bg">
                Read More
              </a>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xs-12 blog-image wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <img src={img2} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="divider-gap"></div>
          <div className="row">
            <div
              className="col-md-6 col-lg-6 col-xs-12 blog-content wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.6s"
            >
              <h3 className="blue-text">Excercise for body</h3>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book. who is thought to
                have scrambled parts of Cicero's De Finibus Bonorum et Malorum
                for use in a type specimen book.
              </p>
              <br />
              <a href="/" className="white-text readmore-bg">
                Read More
              </a>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xs-12 blog-image wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.7s"
            >
              <img src={img3} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestPostsSection;
