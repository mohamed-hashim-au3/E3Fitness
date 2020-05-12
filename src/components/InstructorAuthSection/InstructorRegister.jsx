import React, { useState, useEffect } from "react";
import BecameInstructor from "./BecameInstructor";

import BecameInstructor2 from "./BecameInstructor2";
import WelcomeScreen from "./WelcomeScreen";
function InstructorRegister(props) {
  const [Case, setCase] = useState("FirstCase");
  const [shows, setShow] = useState(false);
  const handleCase = input => {
    setCase(input);
    if (input === "FirstCase") {
      setShow(true);
    }
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  switch (Case) {
    case "FirstCase": {
      return (
        <WelcomeScreen
          shows={shows}
          handle={handleCase}
          handleShow={handleShow}
          handleClose={handleClose}
        />
      );
    }
    case "SecondCase": {
      return (
        <BecameInstructor
          show={Case === "SecondCase" ? true : false}
          handle={handleCase}
        />
      );
    }
    case "ThirdCase": {
      return (
        <BecameInstructor2
          show={Case === "ThirdCase" ? true : false}
          handle={handleCase}
        />
      );
    }
    default: {
      return "";
    }
  }
}

export default InstructorRegister;
