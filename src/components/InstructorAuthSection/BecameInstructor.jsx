import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { ReactComponent as Fbicon } from "../../assets/images/fb-icon.svg";
const BecameInstructor = props => {
  // const handleClose = () => setShow(false);
  // const [show, setShow] = useState(false);
  // const handleShow = () => setShow(props.show);
  const handleClose = () => {
    setShow(false);
  };
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    setShow(props.show);
  }, []);
  return (
    <>
      <p onClick={props.handleShow} style={{ padding: "0", margin: "0" }}>
        Became an Instructor
      </p>
      <Modal
        className="modal fade"
        id="becomeinstructormodal"
        show={show}
        onHide={handleClose}
        centered
      >
        <h1 className="signup-heading">
          Become an <span>INSTRUCTOR</span>
        </h1>
        <span className="line-adjust-t"></span>
        <br></br>
        <div className="modal-body" id="">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control sign-in"
                id="exampleInputname"
                placeholder="Full Name "
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control sign-in"
                id="exampleInputname"
                placeholder="Contact Number "
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control sign-in"
                id="exampleInputEmail1"
                placeholder="Email ID "
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control sign-in"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control sign-in"
                id="exampleInputPassword1"
                placeholder="Confirm Password"
              />
            </div>
            <br />
            <div className="text-center next-inst-btn">
              <button
                type="submit"
                className="btn btn-primary sing-in-btn"
                onClick={() => {
                  setShow(false);
                  props.handle("ThirdCase");
                }}
              >
                NEXT
              </button>
            </div>

            <div className="fb-section">
              <Fbicon />

              <p>Signup with facebook</p>
            </div>
            {/* <div className="text-center footer-login">
              <p>
                if you have an account <a href="#">Login</a>
              </p>
            </div> */}
          </form>
        </div>
      </Modal>
    </>
  );
};

export default BecameInstructor;
