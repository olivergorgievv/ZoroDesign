import HeroSection from "../components/HeroSection";
import LeftCTA from "../components/LeftCTA";
import Features from "../components/Features";
import Products from "../components/Products";
import CallToAction from "../components/CallToAction";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  return (
    <>
      <HeroSection />
      <LeftCTA />
      <Features />
      <Products />
      {location.pathname === "/" && <CallToAction />}
    </>
  );
}

export default Home;
