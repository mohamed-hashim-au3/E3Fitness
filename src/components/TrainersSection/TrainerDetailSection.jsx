import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import img1 from "../../assets/images/team/team-9.jpg";
import img2 from "../../assets/images/up-one.jpg";
import img3 from "../../assets/images/up-two.jpg";
import img4 from "../../assets/images/up-three.jpg";
import img5 from "../../assets/images/up-four.jpg";
import img6 from "../../assets/images/up-five.jpg";
import { ReactComponent as Moree } from "../../assets/images/moree.svg";
function TrainerDetailSection(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <p
        className="text-white"
        onClick={handleShow}
        style={{ cursor: "pointer" }}
      >
        Profile Details
      </p>
      <Modal
        className="modal fade"
        id="teammodal"
        show={show}
        onHide={handleClose}
        centered
      >
        <Modal.Header closeButton className="mb-2" />
        <div className="team-detail-container">
          <div className="team-info">
            <img src={props.img} alt="" className="img-fluid" />
          </div>
          <div className="team-info-content">
            <h1 className="blue-text">
              MICHAEL JORDAN
              <br /> <small>HIT SPECIALIS</small>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation
              <br />
              ullamcorper suscipit lobortis nisl ut aliquip ex ea Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea
            </p>
          </div>
        </div>
        <div className="team-detail-container2">
          <div className="heading">
            <h4 className="white-text">JOIN CLASSES</h4>
          </div>
          <div className="line"></div>
        </div>
        <div className="team-detail-container3">
          <div className="img-info">
            <img src={img2} className="img-fluid team-img" alt="" />
            <br />
            <span className="img-fluid item-add">
              <Moree />
            </span>
          </div>
          <div className="img-info">
            <img src={img3} className="img-fluid team-img" alt="" />
            <br />
            <span className="img-fluid item-add">
              <Moree />
            </span>
          </div>
          <div className="img-info">
            <img src={img4} className="img-fluid team-img" alt="" />
            <br />
            <span className="img-fluid item-add">
              <Moree />
            </span>
          </div>
          <div className="img-info">
            <img src={img5} className="img-fluid team-img" alt="" />
            <br />
            <span className="img-fluid item-add">
              <Moree />
            </span>
          </div>
          <div className="img-info">
            <img src={img6} className="img-fluid team-img" alt="" />
            <br />
            <span className="img-fluid item-add">
              <Moree />
            </span>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default TrainerDetailSection;
