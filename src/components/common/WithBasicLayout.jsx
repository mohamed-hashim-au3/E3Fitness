import React from "react";

function WithBasicLayout(props) {
  return (
    <>
      <section className="course-section">
        <div className="container-fluid ">
          <div className="row">{props.children}</div>
        </div>
      </section>
    </>
  );
}

export default WithBasicLayout;
