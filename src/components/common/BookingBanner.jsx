import React from "react";

function BookingBanner() {
  return (
    <>
      <section className="booking-class relative">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-9 col-lg-9 col-xs-12 wow fadeInUp"
              data-wow-duration="1.6s"
              data-wow-delay="1s"
            >
              <h1 className="text-left white-text">
                Get in the best shape of your life, with me at your side
              </h1>
            </div>
            <div
              className="col-md-3 col-lg-3 col-xs-12 wow fadeInUp"
              data-wow-duration="1.6s"
              data-wow-delay="1.2s"
            >
              <a href="/" className="blue-bg-text white-text">
                Book a class
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookingBanner;
