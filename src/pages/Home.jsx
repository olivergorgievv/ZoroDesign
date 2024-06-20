import HeroSection from "../components/HeroSection";
import LeftCTA from "../components/LeftCTA";
import Features from "../components/Features";
import Products from "../components/Products";
import CallToAction from "../components/CallToAction";
import { useLocation } from "react-router-dom";
import Navbar2 from "../components/UI/Navbar2";

function Home() {
  const location = useLocation();
  return (
    <>
      <HeroSection />
      <Navbar2 />
      <LeftCTA />
      <Features />
      <Products />
      {location.pathname === "/" && <CallToAction />}
    </>
  );
}

export default Home;
