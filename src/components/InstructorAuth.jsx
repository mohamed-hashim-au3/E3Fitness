import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { ReactComponent as Fbicon } from "../assets/images/fb-icon.svg";
import { Link } from "react-router-dom";
function InstructorAuth() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      {/* <p onClick={handleShow}>Became an Instructor</p> */}

      <div className="btn-acc-info" onClick={handleShow}>
        Trainer Account
      </div>
      <Modal
        className="modal fade"
        id="loginstructormodal"
        show={show}
        onHide={handleClose}
        centered
      >
        <h1 className="signup-heading">
          Login as <span>INSTRUCTOR</span>
        </h1>
        <span className="line-adjust-t"></span>
        <br />
        <div className="modal-body" id="">
          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control sign-in"
                id="exampleInputEmail1"
                placeholder="Email"
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

            <br />
            <div className="text-center next-inst-btn">
              <Link to="/user/createcourse/1">
                <button type="submit" className="btn btn-primary sing-in-btn">
                  LOGIN
                </button>
              </Link>
            </div>

            <div className="fb-section">
              <Fbicon />
              <p className="ml-4">Login with facebbok</p>
            </div>
            {/* <div className="text-center footer-login">
              <p>
                Don't have an account <a>Signup</a>
              </p>
            </div> */}
          </form>
        </div>
      </Modal>
    </>
  );
}

export default InstructorAuth;
