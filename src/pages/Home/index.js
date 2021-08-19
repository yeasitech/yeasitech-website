import Footer from "../../components/Footer";
import Header from "../../components/Header";
import OwlCarousel from "../../components/OwlCarousel";
import Services from "../Services";
// import Features from "../Features";
import PortFolio from "../Portfolio";
import Achievements from "../Acievements";
import Reviews from "../Reviews";
import Contact from "../ContactUs";
import Testimonial from "../Testimonial";
import Map from "../Map";

import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Yeasi Tech</title>
        <meta name="desciption" content="" />
        <meta
          name="keywords"
          content="web development company, web development agency, web app design, Mobile App development, Digital Marketing"
        />
      </Helmet>
      <Header />
      <OwlCarousel />

      <Services />
      {/* <Features /> */}

      <PortFolio />
      <Achievements />
      <Reviews />
      <Testimonial />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
}
