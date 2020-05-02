import React from "react";

function BookingClassSection() {
  return (
    <>
      <section class="booking-class-new">
        <div class="booking-flex-container">
          <div
            class="booking-head-text wow fadeInUp"
            data-wow-duration="1.6s"
            data-wow-delay="1s"
          >
            <h1 class="text-left white-text">
              Get in the best shape of your life, with me at your side
            </h1>
          </div>
          <div
            class="booking-now-btn wow fadeInUp"
            data-wow-duration="1.6s"
            data-wow-delay="1.2s"
          >
            <button class="btn  btn-lg btn-info btn-block">BOOK A CLASS</button>
          </div>
        </div>
        <div class="container-fluid latest-post-heading p-l-0">
          <div class="row">
            <div class="col-md-12 col-lg-12 col-sm-12">
              <h1 class=" light-blue">Upcoming Classes</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookingClassSection;
