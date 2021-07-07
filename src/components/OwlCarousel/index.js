import bannerImage1 from "../../assets/img/slider/bg-1.jpg";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class OwlCarousel extends React.Component {
  render() {
    return (
      <div id="carousel-area">
        <div class="carousel-inner" role="listbox">
          <Carousel>
            <div class="carousel-item active">
              <img src={bannerImage1} alt="" />
              <div class="carousel-caption text-center">
                <h3 class="wow fadeInRight" data-wow-delay="0.2s">
                  Mobile App
                </h3>
                <h2 class="wow fadeInRight" data-wow-delay="0.4s">
                  Development
                </h2>
                <h4 class="wow fadeInRight" data-wow-delay="0.6s">
                  Comes with All Essential Sections & Elements
                </h4>
              </div>
            </div>
            <div class="carousel-item active">
              <img src={bannerImage1} alt="" />
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
              <img src={bannerImage1} alt="" />
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
