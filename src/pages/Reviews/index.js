import React from "react";
import reviewImage1 from "../../assets/img/reviews/1.png";
import reviewImage2 from "../../assets/img/reviews/2.png";
import reviewImage3 from "../../assets/img/reviews/3.png";
import reviewImage4 from "../../assets/img/reviews/4.png";
import reviewImage5 from "../../assets/img/reviews/5.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

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
          <div class="carousel-inner" role="listbox">
            <Carousel
              responsive={responsive}
              infiniteLoop={true}
              autoPlay={true}
            >
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
