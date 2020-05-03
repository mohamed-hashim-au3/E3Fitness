import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import img1 from "../../assets/images/shop-2.jpg";
import img2 from "../../assets/images/shop-1.jpg";

import img3 from "../../assets/images/shop-3.jpg";
function ProductDetails(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <img
        src={props.img}
        alt=""
        style={{ height: "300px", width: "250px" }}
        onClick={handleShow}
      />
      <Modal
        className="modal fade"
        id="productmodal"
        show={show}
        onHide={handleClose}
        centered
        size="lg"
      >
        <Modal.Header closeButton className="mb-2" />
        <Modal.Body>
          <div className="product-details-conatiner">
            <div className="product-first">
              <img src={img1} alt="" className="img-fluid" />
              <div className="inner-img-details">
                <img src={img2} alt="" className="img-fluid" />
                <img src={img2} alt="" className="img-fluid" />
                <img src={img3} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="product-second">
              <h1>Muscle Pharm BCAA Essentials</h1>
              <h2>(240 Capsules)</h2>
              <h4>Product ID:3240890</h4>
              <h2 className="price-tag">$43.52</h2>
              <hr />
              <h1>Customer Reviews</h1>
              <div className="review-section">
                <h3>No reviews yet</h3>
                <p>
                  <a href="#">Write a review</a>{" "}
                </p>
              </div>
              <p>Select Details</p>
              <select className="custom-select">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <br />
              <br />
              <hr />
              <div className="quantity">
                <a href="#"> - </a>
                <div className="number">12</div>
                <a href="#"> + </a>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg  product-btn sing-in-btn"
                >
                  ADD TO CART
                </button>
              </div>{" "}
              <br />
              <h1>DEMAND MORE OF YOUR BODY AND YOUR BCAA </h1>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.{" "}
              </p>
              <h3>Benefits of product</h3>
              <ul className="iner-product">
                <li>Lorem ipsum, or lipsum as it is</li>
                <li>Lorem ipsum, or lipsum as it is</li>
                <li>Lorem ipsum, or lipsum as it is</li>
              </ul>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProductDetails;
