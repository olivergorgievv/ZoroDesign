import HeroSection from "../components/HeroSection";
import LeftCTA from "../components/LeftCTA";
import Features from "../components/Features";
import Products from "../components/Products";
import CallToAction from "../components/CallToAction";
import { useLocation } from "react-router-dom";
import ZendropFooter from "../components/zendrop/ZendropFooter";
import AsSeenOn from "../components/zendrop/AsSeenOn";
import FeaturingMaps from "../components/zendrop/FeaturingMaps";
import RightCenteredCTA from "../components/zendrop/RightCenteredCTA";

function Home() {
  const location = useLocation();
  return (
    <>
      <HeroSection />
      <LeftCTA />
      <Features />
      <Products />
      {location.pathname === "/" && <CallToAction />}
      <ZendropFooter />
      <AsSeenOn />
      <FeaturingMaps />
      <RightCenteredCTA />
    </>
  );
}

export default Home;
