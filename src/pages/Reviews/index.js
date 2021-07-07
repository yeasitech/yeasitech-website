import React from "react";
import { Carousel } from "react-responsive-carousel";
import reviewImage1 from "../../assets/img/reviews/1.png";
import reviewImage2 from "../../assets/img/reviews/2.png";
import reviewImage3 from "../../assets/img/reviews/3.png";
import reviewImage4 from "../../assets/img/reviews/4.png";
import reviewImage5 from "../../assets/img/reviews/5.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Reviews() {
  return (
    <div className="review section" id="review">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Reviews</h2>
          <span>Reviews</span>
          <p className="section-subtitle">
            Important reviews from clients about our company.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <Carousel>
              <div className="item text-center">
                <img src={reviewImage1} width="600" alt="" />
              </div>
              <div className="item text-center">
                <img src={reviewImage2} width="600" alt="" />
              </div>
              <div className="item text-center">
                <img src={reviewImage3} width="600" alt="" />
              </div>

              <div className="item text-center">
                <img src={reviewImage4} width="600" alt="" />
              </div>

              <div className="item text-center">
                <img src={reviewImage5} width="600" alt="" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
