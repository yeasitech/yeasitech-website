/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import axios from "axios";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";

const ContactUs = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [popUpMsg, setPopUpMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const _validation = () => {
    if (
      name.length == 0 ||
      email.length == 0 ||
      subject.length == 0 ||
      message.length == 0
    ) {
      return false;
    } else {
      return true;
    }
  };

  const resetValue = () => {
    setName("");
    setEmail("");
    setSubject("");
    setEmail("");
    setMessage("");
  };

  const hideAlert = () => {
    setShow(false);
  };

  const toast = (msg) => {
    console.log("message", msg);
    setPopUpMsg(msg);
    setShow(true);
  };

  const onSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      console.log("State", name, email, message, subject);
      let validation = await _validation();

      if (validation) {
        let res = await axios.post(
          "https://sqvk72blwd.execute-api.us-east-2.amazonaws.com/default/sendEmailContact",
          {
            name: name,
            email: email,
            subject: subject,
            message: message,
          }
        );
        resetValue();
        if (res.status === 200) {
          setTimeout(() => setLoading(false), 1000);
          setTimeout(
            () =>
              toast("Thanks for reaching to us , we will get back to you soon"),
            1000
          );
        }
      } else {
        setTimeout(() => setLoading(false), 1000);
        setTimeout(() => toast("Please fill all the fields"), 1000);
      }
    } catch (error) {
      setTimeout(() => setLoading(false), 1000);
      console.log(error.message);
      setTimeout(
        () => toast("Error while sending the message. Try Again"),
        1000
      );
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="contact" className="section">
      <div className="contact-form">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p style={{ fontSize: "1.1rem" }}>Contact Us</p>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-9 col-xs-12">
              <div className="contact-block">
                <form id="contactForm">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          required
                          data-error="Please enter your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="form-control"
                          name="name"
                          required
                          data-error="Please enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Subject"
                          id="msg_subject"
                          className="form-control"
                          required
                          data-error="Please enter your subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          id="message"
                          placeholder="Your Message"
                          rows="7"
                          data-error="Write your message"
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="submit-button">
                        <button
                          className="btn btn-common btn-effect"
                          onClick={onSubmit}
                        >
                          {!loading ? "Submit" : "Loading..."}
                        </button>
                        {loading ? <div className="loader" /> : null}
                        <div id="msgSubmit" className="h3 hidden"></div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-xs-12">
              <div className="contact-deatils">
                {/* <!-- Content Info --> */}
                <div className="contact-info_area">
                  <div className="contact-info">
                    <i className="lni-map"></i>
                    <h5>Location</h5>
                    <p>Chinar Park, Rajarhat, Kolkata, West Bengal, India</p>
                  </div>
                  {/* <!-- Content Info --> */}
                  <div className="contact-info">
                    <i className="lni-star"></i>
                    <h5>E-mail</h5>
                    <p>hr@yeasitech.com</p>
                  </div>
                  {/* <!-- Content Info --> */}
                  <div className="contact-info">
                    <i className="lni-phone"></i>
                    <h5>Phone</h5>
                    <p>+91 8172076625</p>
                  </div>
                  {/* <!-- Icon --> */}
                  <ul className="footer-social">
                    <li>
                      <a className="facebook" href="#">
                        <i className="lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="#">
                        <i className="lni-twitter-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a className="linkedin" href="#">
                        <i className="lni-linkedin-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a className="google-plus" href="#">
                        <i className="lni-google-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SweetAlert
          show={show}
          title="YeasiTech"
          text={popUpMsg}
          onConfirm={hideAlert}
        />
      </div>
    </section>
  );
};
export default ContactUs;
