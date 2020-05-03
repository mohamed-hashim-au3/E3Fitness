import React, { useState, useEffect } from "react";
import { ReactComponent as Fbicon } from "../assets/images/fb-icon.svg";
import UserSignUp from "./UserSignUp";
import { Modal, Button } from "react-bootstrap";
// import img1 from "../assets/images/captcha.png";
function UserSignIn() {
  const [show, setShow] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const handleClose = () => {
    setShow(false);
    setIsRegister(false);
  };
  const handleShow = () => {
    setShow(true);
    setIsRegister(false);
  };

  return (
    <>
      <button className="mr-3 navbar-text signup-links" onClick={handleShow}>
        log in/ sign up
      </button>

      {/* <Modal show={show} onHide={handleClose}> */}
      {!isRegister ? (
        <Modal
          className="modal fade"
          id="signinmodal"
          show={show}
          onHide={handleClose}
          centered
        >
          <Modal.Body>
            <h1 className="sign-heading">
              E3 <span className="white-text">Fitness</span>
            </h1>{" "}
            <br />
            <p className="text-white">SIgn In</p>
            <div>
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control sign-in"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Email or Phone Number "
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control sign-in"
                    id="exampleInputPassword1"
                    placeholder="Enter Password"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block sing-in-btn"
                >
                  SIGN IN
                </button>
                <br />
                <div className="sign-bottom">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                      Remember me
                    </label>
                  </div>
                  <p className="text-right">
                    <div
                      onClick={() => {
                        setShow(false);
                        setIsRegister(true);
                      }}
                    >
                      Sign Up
                    </div>
                  </p>
                </div>
                <div className="fb-section">
                  <span className="img-fluid">
                    <Fbicon />
                  </span>
                  <p>Sign in with facebbok</p>
                </div>
              </form>
            </div>
          </Modal.Body>

          {/* </div> */}
        </Modal>
      ) : (
        <UserSignUp show={isRegister} />
      )}
    </>
  );
}

export default UserSignIn;
