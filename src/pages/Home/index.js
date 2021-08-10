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

export default function Home() {
  return (
    <div>
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
