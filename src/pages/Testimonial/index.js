import React from "react";
import { Carousel } from "react-responsive-carousel";
import reviewImage1 from "../../assets/img/testimonial/trevor.jpeg";
import reviewImage2 from "../../assets/img/testimonial/darren.jpg";

export default function Testimonial() {
  return (
    <div className="testimonial section" id="testimonial">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Testimonial</h2>
          <span>Testimonial</span>
          <p className="section-subtitle">What Clients Says About Us</p>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <Carousel>
              <div className="item">
                <div className="testimonial-item">
                  <div className="author">
                    <div className="img-thumb">
                      <img src={reviewImage1} alt="" />
                    </div>
                    <div className="author-info">
                      <h2>
                        <a href="#">Trevor White</a>
                      </h2>
                      <span>Founder, CoachFirst</span>
                    </div>
                  </div>
                  <div className="content-inner">
                    <p className="description">
                      The team at Yeasitech are highly skilled and very
                      responsive. They have been great communicators, working
                      closely as a team and I’ve seen our partnership continue
                      to build
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-item">
                  <div className="author">
                    <div className="img-thumb">
                      <img src={reviewImage2} alt="" />
                    </div>
                    <div className="author-info">
                      <h2>
                        <a href="#">Darren Howard</a>
                      </h2>
                      <span>Director, Cohesion</span>
                    </div>
                  </div>
                  <div className="content-inner">
                    <p className="description">
                      We’ve been dealing with Kazi professionally for over 2
                      years now and can not fault him. He is extremely well
                      versed in eCommerce work, mobile app development and
                      overall providing solutions for modern day issues when it
                      comes to Magento, Mern Stack , PHP and most web platforms
                      we’ve asked for his help with. Highly recommend Kazi if
                      you’re looking to further your projects or business!
                    </p>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
