import bannerImage1 from "../../assets/img/slider/bg-1.jpg";
import React from "react";
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

class OwlCarousel extends React.Component {
  render() {
    return (
      <div id="carousel-area">
        <div class="carousel-inner" role="listbox">
          <Carousel responsive={responsive} infiniteLoop={true} autoPlay={true}>
            <div class="carousel-item active">
              <img src={bannerImage1} alt="mobile app development" />
              <div class="carousel-caption text-center">
                <h3 class="wow fadeInRight" data-wow-delay="0.2s">
                  Mobile App
                </h3>
                <h2 class="wow fadeInRight" data-wow-delay="0.4s">
                  Development
                </h2>
                {/* <h4 class="wow fadeInRight" data-wow-delay="0.6s">
                  Comes with All Essential Sections & Elements
                </h4> */}
                <h1 className="homaPageH1">
                  Yeasitech Web App & Mobile App Development
                </h1>
              </div>
            </div>
            <div class="carousel-item active">
              <img src={bannerImage1} alt="mobile app development" />
              <div class="carousel-caption text-center">
                <h3 class="wow fadeInRight" data-wow-delay="0.2s">
                  Ecommerce
                </h3>
                <h2 class="wow fadeInRight" data-wow-delay="0.4s">
                  Web Development
                </h2>
                <h4 class="wow fadeInRight" data-wow-delay="0.6s">
                  Comes with All Essential Sections & Elements
                </h4>
              </div>
            </div>
            <div class="carousel-item active">
              <img src={bannerImage1} alt="mobile app development" />
              <div class="carousel-caption text-center">
                <h3 class="wow fadeInDown" data-wow-delay="0.3s">
                  Ready For
                </h3>
                <h2 class="wow fadeInRight" data-wow-delay="0.6s">
                  Digital Marketing
                </h2>
                <h4 class="wow fadeInUp" data-wow-delay="0.6s">
                  App, Business, SaaS and Landing Pages
                </h4>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}
export default OwlCarousel;
