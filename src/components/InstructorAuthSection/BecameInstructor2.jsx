import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
function BecameInstructor2(props) {
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
      <p onClick={handleShow} style={{ padding: "0", margin: "0" }}>
        Became an Instructor
      </p>
      <Modal
        className="modal fade"
        id="becomeinstructortext"
        show={show}
        onHide={handleClose}
        centered
      >
        <h1 className="signup-heading">
          Become an <span>INSTRUCTOR</span>
        </h1>
        <span className="line-adjust-t"></span>
        <br /> <br />
        <div className="modal-body" id="">
          <form>
            <div className="form-group">
              <textarea
                name=""
                id=""
                cols="5"
                rows="5"
                type="text"
                className="form-control sign-in"
                id="exampleInputname"
                placeholder="Full Name "
              ></textarea>
            </div>
            <br />
            <div className="intrest-section">
              <div class="area-interest-head">
                <p>Cert Upload</p>
                <p>Excercise Type/Category</p>
                <p>Expired</p>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="file"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Aerobics pZone/pCardio/Youth
                </label>
                <i class="fa fa-calendar" aria-hidden="true"></i>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="file"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Bokwa pCardio/pDance{" "}
                </label>
                <i class="fa fa-calendar" aria-hidden="true"></i>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="files"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Bolly Dazz pDance
                </label>
                <i class="fa fa-calendar" aria-hidden="true"></i>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Cardio Dance pCardio/pDanceh
                </label>
                <i class="fa fa-calendar" aria-hidden="true"></i>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Chair Zumba Senior
                </label>
                <i class="fa fa-calendar" aria-hidden="true"></i>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Circuit Training pCardio/pHIIT
                </label>
                <i class="fa fa-calendar" aria-hidden="true"></i>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Kickboxing pCardio/pHIIT
                </label>
                <i class="fa fa-calendar" aria-hidden="true"></i>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Kkardiop pCardio/pDance
                </label>
                <i class="fa fa-calendar" aria-hidden="true"></i>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  KPopX Fitness pCardio/pDance
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  KpopX Lite pZone/pCardio/Senior
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Line Dance pZone/pCardio/Senior
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Low Impact Aerobics pZone/Senior
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Masala Bhangra pDance
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Pilates pZone/pZEN/Senior/Youth
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Piloxing pCardio/pHGIIT
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Qigong Pzone/Senior
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Salsation pDance
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Stretch Band Exercise Pzone/Youth
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Tai Chi Pzen/Senior
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Tai Ji Quan for Beginners Pzen/Senior
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  U-Jam Fitness pCardio
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Yoga pZen
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Yoga Pzen/Senior
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Yogalates pZen
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Yogalates Pzen/Senior
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Zumba pDance
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Zumba Gold pDance/ Senior
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Zumba Kids pDance/ Youth
                </label>
              </div>
            </div>
            <br />
            <div className="text-center next-inst-btn">
              <button
                type="submit"
                className="btn btn-primary sing-in-btn mr-3"
                onClick={() => {
                  props.handle("SecondCase");
                  setShow(false);
                }}
              >
                PREVIOUS
              </button>
              <button type="submit" className="btn btn-primary sing-in-btn">
                SIGNUP
              </button>
            </div>{" "}
            <br />
            <div className="text-center footer-login">
              <p>
                if you have an account <a href="#">Login</a>
              </p>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default BecameInstructor2;
