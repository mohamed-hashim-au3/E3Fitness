import React, { useState, useEffect } from "react";
// import { ReactComponent as Fbicon } from "../assets/images/fb-icon.svg";
import { Modal } from "react-bootstrap";
import img1 from "../assets/images/captcha.png";
import ChoosePlan from "./ChoosePlan";
function UserSignUp(props) {
  const [show, setShow] = useState(false);
  const [plan, setPlan] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  useEffect(() => {
    setShow(props.show);
  }, []);
  return (
    <>
      {!plan ? (
        <Modal
          className="modal fade"
          id="signinmodal"
          show={show}
          onHide={handleClose}
          centered
        >
          <Modal.Body>
            <h1 className="signup-heading">Regiter as a member</h1> <br />
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control sign-in"
                    id="exampleInputname1"
                    placeholder="Enter Name "
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control sign-in"
                    id="exampleInputname2"
                    placeholder="Enter Phone Number (optional) "
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control sign-in"
                    id="exampleInputEmail13"
                    placeholder="Enter Email or Phone Number "
                  />
                  <small className="email-helps">
                    Please ensure that you have entered correct email
                  </small>
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    className="form-control sign-in"
                    id="exampleInputPassword1"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control sign-in"
                    id="exampleInputPassword2"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="form-group captcha">
                  <img src={img1} className="img-fluid" alt="" />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control sign-in"
                    id="exampleInputname4"
                    placeholder="Enter code above "
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary premium-btn sing-in-btn mr-0"
                  onClick={() => {
                    setShow(false);
                    setPlan(true);
                  }}
                >
                  Go Premium
                </button>
                <br />
                <br />
                <small className="info-term">
                  For the full <a href="#">terms and conditions</a>, please
                  refer to the Terms and Conditions for Live{" "}
                </small>
              </form>
            </div>
          </Modal.Body>

          {/* </div> */}
        </Modal>
      ) : (
        <ChoosePlan show={plan} />
      )}
    </>
  );
}

export default UserSignUp;
