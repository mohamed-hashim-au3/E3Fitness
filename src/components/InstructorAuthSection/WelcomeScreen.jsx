import React from "react";
import { Modal } from "react-bootstrap";
function WelcomeScreen(props) {
  return (
    <>
      {" "}
      <p onClick={props.handleShow} style={{ padding: "0", margin: "0" }}>
        Became an Instructor
      </p>
      <Modal
        class="modal fade"
        id="welcomescreen"
        centered
        show={props.shows}
        onHide={props.handleClose}
        centered
      >
        <h1 class="Sign-heading text-center">
          E3 <span class="white-text">Fitness</span>
        </h1>{" "}
        <br />
        <div class="modal-body welcome-screen relative">
          <h2>Good Day Trainers ...</h2>

          <h1>E3 Fitness Welcomes you !</h1>
          <br />
          <br />
          <button
            class="text-right btn btn-info"
            onClick={() => {
              props.handle("SecondCase");
              props.handleClose();
            }}
          >
            {" "}
            I agree
          </button>
        </div>
      </Modal>
    </>
  );
}

export default WelcomeScreen;
