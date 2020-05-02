import React from "react";
import img1 from "../../assets/images/wheyOn-1.png";
import img2 from "../../assets/images/wheyOn-2.jpg";
import img3 from "../../assets/images/wheyOn-3.png";
import img4 from "../../assets/images/shop-2.jpg";
import img5 from "../../assets/images/shop-3.jpg";
import img6 from "../../assets/images/shop-1.jpg";
function ProductListingSection() {
  return (
    <>
      <section class="shop-inner-content">
        <div class="flex-container">
          <a href="#">
            <div
              class="shop-product text-center wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".5s"
            >
              <img
                src={img1}
                alt=""
                style={{ height: "300px", width: "250px" }}
              />
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
            </div>
          </a>
          <a href="#">
            <div
              class="shop-product text-center wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".6s"
            >
              <img
                src={img2}
                alt=""
                style={{ height: "300px", width: "250px" }}
              />
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
            </div>
          </a>
          <a href="#">
            <div
              class="shop-product text-center wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".7s"
            >
              <img
                src={img3}
                alt=""
                style={{ height: "300px", width: "250px" }}
              />
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
            </div>
          </a>
        </div>
        <div class="flex-container">
          <a href="#">
            <div
              class="shop-product text-center wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".8s"
            >
              <img
                src={img4}
                alt=""
                style={{ height: "300px", width: "250px" }}
              />
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
            </div>
          </a>
          <a href="#">
            <div
              class="shop-product text-center wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".9s"
            >
              <img
                src={img5}
                alt=""
                style={{ height: "300px", width: "250px" }}
              />
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
            </div>
          </a>
          <a href="#">
            <div
              class="shop-product text-center wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay="1s"
            >
              <img
                src={img6}
                alt=""
                style={{ height: "300px", width: "250px" }}
              />
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

export default ProductListingSection;
