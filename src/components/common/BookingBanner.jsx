import React from "react";

function BookingBanner() {
  return (
    <>
      <section className="booking-class-new">
        <div className="booking-flex-container">
          <div
            className="booking-head-text wow fadeInUp"
            data-wow-duration="0.5s"
            data-wow-delay="0.5s"
          >
            <h1 className="text-left white-text">
              Get in the best shape of your life, with me at your side
            </h1>
          </div>
          <div
            className="booking-now-btn wow fadeInUp"
            data-wow-duration="0.5s"
            data-wow-delay="0.5s"
          >
            <button className="btn  btn-lg btn-info btn-block">
              BOOK A CLASS
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookingBanner;
