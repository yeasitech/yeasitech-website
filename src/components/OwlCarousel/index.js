import bannerImage1 from "../../assets/img/slider/bg-1.jpg";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class OwlCarousel extends React.Component {
  render() {
    return (
      <Carousel>
        <div id="carousel-area">
          <div
            id="carousel-slider"
            class="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carousel-slider"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#carousel-slider" data-slide-to="1"></li>
              <li data-target="#carousel-slider" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
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
              <div class="carousel-item">
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
              <div class="carousel-item">
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
            </div>
            <a
              class="carousel-control-prev"
              href="#carousel-slider"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control" aria-hidden="true">
                <i class="lni-chevron-left"></i>
              </span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carousel-slider"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control" aria-hidden="true">
                <i class="lni-chevron-right"></i>
              </span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </Carousel>
    );
  }
}
export default OwlCarousel;
