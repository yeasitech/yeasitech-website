import Logo from "../assets/img/logo.png";

export default function Header() {
  return (
    <div id="slider-area">
      <nav class="navbar navbar-expand-md fixed-top scrolling-navbar bg-white">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <img src={Logo} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="lni-menu"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto w-100 justify-content-end">
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#slider-area">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#services">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#features">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#portfolios">
                  Portfolio
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link page-scroll" href="#review">
                  Reviews
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#testimonial">
                  Testimonial
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
