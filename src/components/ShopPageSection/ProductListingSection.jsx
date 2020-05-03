import React from "react";
import img1 from "../../assets/images/wheyOn-1.png";
import img2 from "../../assets/images/wheyOn-2.jpg";
import img3 from "../../assets/images/wheyOn-3.png";
import img4 from "../../assets/images/shop-2.jpg";
import img5 from "../../assets/images/shop-3.jpg";
import img6 from "../../assets/images/shop-1.jpg";
import ProductDetails from "./ProductDetails";
function ProductListingSection() {
  return (
    <>
      <section class="shop-inner-content">
        <div class="flex-container">
          <a>
            <div
              class="shop-product text-center wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".5s"
            >
              {/* <img
                src={img1}
                alt=""
                style={{ height: "300px", width: "250px" }}
              /> */}
              <ProductDetails img={img1} />
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
            </div>
          </a>
          <a>
            <div
              class="shop-product text-center wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".6s"
            >
              <ProductDetails img={img2} />
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
            </div>
          </a>
          <a>
            <div
              class="shop-product text-center wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".7s"
            >
              <ProductDetails img={img3} />
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
            </div>
          </a>
        </div>
        <div class="flex-container">
          <a>
            <div
              class="shop-product text-center wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".8s"
            >
              <ProductDetails img={img4} />
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
            </div>
          </a>
          <a>
            <div
              class="shop-product text-center wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".9s"
            >
              <ProductDetails img={img5} />
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
            </div>
          </a>
          <a>
            <div
              class="shop-product text-center wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay="1s"
            >
              <ProductDetails img={img6} />
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
