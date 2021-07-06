import Footer from "../../components/Footer";
import Header from "../../components/Header";
import OwlCarousel from "../../components/OwlCarousel";
import Services from "../Services";
import Features from "../Features";
import PortFolio from "../Portfolio";

export default function Home() {
  return (
    <div>
      <Header />
      <OwlCarousel />
      <Services />
      <Features />
      <PortFolio />
      <div class="counters section bg-defult">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-3">
              <div class="facts-item">
                <div class="icon">
                  <i class="lni-rocket"></i>
                </div>
                <div class="fact-count">
                  <h3>
                    <span class="counter">100</span>%
                  </h3>
                  <h4>Faster</h4>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
              <div class="facts-item">
                <div class="icon">
                  <i class="lni-user"></i>
                </div>
                <div class="fact-count">
                  <h3>
                    <span class="counter">21</span>
                  </h3>
                  <h4>Satisfied client</h4>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
              <div class="facts-item">
                <div class="icon">
                  <i class="lni-laptop-phone"></i>
                </div>
                <div class="fact-count">
                  <h3>
                    <span class="counter">40</span>+
                  </h3>
                  <h4>Total project</h4>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
              <div class="facts-item">
                <div class="icon">
                  <i class="lni-code"></i>
                </div>
                <div class="fact-count">
                  <h3>
                    <span class="counter">65</span>
                  </h3>
                  <h4>work completed</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Counter Section End --> */}

      {/* <!-- Testimonial Section Start --> */}
      <section class="review section" id="review">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Our Reviews</h2>
            <span>Reviews</span>
            <p class="section-subtitle">
              Important reviews from clients about our company.
            </p>
          </div>
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div id="reviews" class="touch-slider owl-carousel">
                <div class="item text-center">
                  <img src="img/reviews/1.png" width="600" alt="" />
                </div>
                <div class="item text-center">
                  <img src="img/reviews/2.png" width="600" alt="" />
                </div>
                <div class="item text-center">
                  <img src="img/reviews/3.png" width="600" alt="" />
                </div>

                <div class="item text-center">
                  <img src="img/reviews/4.png" width="600" alt="" />
                </div>

                <div class="item text-center">
                  <img src="img/reviews/5.png" width="600" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Testimonial Section End --> */}

      {/* <!-- Testimonial Section Start --> */}
      <section class="testimonial section" id="testimonial">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Our Testimonial</h2>
            <span>Testimonial</span>
            <p class="section-subtitle">What Clients Says About Us</p>
          </div>
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div id="testimonials" class="touch-slider owl-carousel">
                <div class="item">
                  <div class="testimonial-item">
                    <div class="author">
                      <div class="img-thumb">
                        <img src="img/testimonial/trevor.jpeg" alt="" />
                      </div>
                      <div class="author-info">
                        <h2>
                          <a href="#">Trevor White</a>
                        </h2>
                        <span>Founder, CoachFirst</span>
                      </div>
                    </div>
                    <div class="content-inner">
                      <p class="description">
                        The team at Yeasitech are highly skilled and very
                        responsive. They have been great communicators, working
                        closely as a team and I’ve seen our partnership continue
                        to build
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="testimonial-item">
                    <div class="author">
                      <div class="img-thumb">
                        <img src="img/testimonial/darren.jpg" alt="" />
                      </div>
                      <div class="author-info">
                        <h2>
                          <a href="#">Darren Howard</a>
                        </h2>
                        <span>Director, Cohesion</span>
                      </div>
                    </div>
                    <div class="content-inner">
                      <p class="description">
                        We’ve been dealing with Kazi professionally for over 2
                        years now and can not fault him. He is extremely well
                        versed in eCommerce work, mobile app development and
                        overall providing solutions for modern day issues when
                        it comes to Magento, Mern Stack , PHP and most web
                        platforms we’ve asked for his help with. Highly
                        recommend Kazi if you’re looking to further your
                        projects or business!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Testimonial Section End --> */}

      {/* <!-- Contact Section Start --> */}
      <section id="contact" class="section">
        <div class="contact-form">
          <div class="container">
            <div class="section-header">
              <h2 class="section-title">Get In Touch</h2>
              <span>Contact</span>
              <p class="section-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dignissimos debitis.
              </p>
            </div>
            <div class="row">
              <div class="col-lg-9 col-md-9 col-xs-12">
                <div class="contact-block">
                  <form id="contactForm">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            required
                            data-error="Please enter your name"
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            type="text"
                            placeholder="Your Email"
                            id="email"
                            class="form-control"
                            name="name"
                            required
                            data-error="Please enter your email"
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            placeholder="Subject"
                            id="msg_subject"
                            class="form-control"
                            required
                            data-error="Please enter your subject"
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            id="message"
                            placeholder="Your Message"
                            rows="7"
                            data-error="Write your message"
                            required
                          ></textarea>
                          <div class="help-block with-errors"></div>
                        </div>
                        <div class="submit-button">
                          <button
                            class="btn btn-common btn-effect"
                            id="submit"
                            type="submit"
                          >
                            Send Message
                          </button>
                          <div id="msgSubmit" class="h3 hidden"></div>
                          <div class="clearfix"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-xs-12">
                <div class="contact-deatils">
                  {/* <!-- Content Info --> */}
                  <div class="contact-info_area">
                    <div class="contact-info">
                      <i class="lni-map"></i>
                      <h5>Location</h5>
                      <p>Chinar Park, Rajarhat, Kolkata, West Bengal, India</p>
                    </div>
                    {/* <!-- Content Info --> */}
                    <div class="contact-info">
                      <i class="lni-star"></i>
                      <h5>E-mail</h5>
                      <p>hr@yeasitech.com</p>
                    </div>
                    {/* <!-- Content Info --> */}
                    <div class="contact-info">
                      <i class="lni-phone"></i>
                      <h5>Phone</h5>
                      <p>+91 8172076625</p>
                    </div>
                    {/* <!-- Icon --> */}
                    <ul class="footer-social">
                      <li>
                        <a class="facebook" href="#">
                          <i class="lni-facebook-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a class="twitter" href="#">
                          <i class="lni-twitter-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a class="linkedin" href="#">
                          <i class="lni-linkedin-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a class="google-plus" href="#">
                          <i class="lni-google-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact Section End --> */}

      {/* <!-- Map Section Start --> */}
      <section id="google-map-area">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 padding-0">
              <object
                style={{ border: "0", height: "450px", width: "100%" }}
                data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.785367106548!2d88.43682466443498!3d22.624488786766893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e2d6220e56b%3A0x5fa6b254499a5164!2sChinar%20Park%2C%20Rajarhat%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1615483831991!5m2!1sen!2sin"
              ></object>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
