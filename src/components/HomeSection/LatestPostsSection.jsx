import React, { useEffect } from "react";
import WOW from "wowjs";
import img1 from "../../assets/images/blog-1.jpg";
import img2 from "../../assets/images/blog-2.jpg";
import img3 from "../../assets/images/blog-3.jpg";
function LatestPostsSection() {
  // useEffect(() => {
  //   new WOW().init();
  // });
  return (
    <>
      <div class="container-fluid latest-post-heading p-l-0">
        <div class="row">
          <div class="col-md-12 col-lg-12 col-sm-12">
            <h1 class=" light-blue">Latest News Posts</h1>
          </div>
        </div>
      </div>
      <section className="latest-post relative ">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-6 col-lg-6 col-xs-12 blog-content wow fadeInUp"
              data-wow-duration="1.6s"
              data-wow-delay="1s"
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
              data-wow-duration="1.6s"
              data-wow-delay="1.1s"
            >
              <img src={img1} className="img-fluid" alt="blogbanner" />
            </div>
          </div>
          <div className="divider-gap"></div>
          <div className="row">
            <div
              className="col-md-6 col-lg-6 col-xs-12 blog-content wow fadeInUp"
              data-wow-duration="1.6s"
              data-wow-delay="1.2s"
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
              data-wow-duration="1.6s"
              data-wow-delay="1.3s"
            >
              <img src={img2} className="img-fluid" alt="blogbanner" />
            </div>
          </div>
          <div className="divider-gap"></div>
          <div className="row">
            <div
              className="col-md-6 col-lg-6 col-xs-12 blog-content wow fadeInUp"
              data-wow-duration="1.6s"
              data-wow-delay="1.4s"
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
              data-wow-duration="1.6s"
              data-wow-delay="1.5s"
            >
              <img src={img3} className="img-fluid" alt="blogbanner" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestPostsSection;
