import React from "react";
import AboutUs from "../../components/homeComp/about/AboutUs";
import Advisors from "../../components/homeComp/advisors/Advisors";
import Agency from "../../components/homeComp/agency/Agency";
import Benefit from "../../components/homeComp/benefit/Benefit";
import Blog from "../../components/homeComp/blog/Blog";
import Counter from "../../components/homeComp/counter/Counter";
import Finance from "../../components/homeComp/Finance/Finance";
import HeroBottom from "../../components/homeComp/heroBottom/HeroBottom";
import LiveDis from "../../components/homeComp/liveDis/LiveDis";
import Map from "../../components/homeComp/map/Map";
import Services from "../../components/homeComp/service/Services";
import HomeTestimonial from "../../components/homeComp/testimonial/HomeTestimonial";
import VinrasHero from "../../components/homeComp/VinrasHero";

const Home = () => {
  return (
    <>
      <div>
        <VinrasHero />
      </div>
      <div className="vinras-container">
        <HeroBottom />
        <AboutUs />
      </div>
      <Services />
      <Finance />

      <div className="vinras-container">
        <LiveDis />
        <Agency />
      </div>
      <Counter />
      <div className="vinras-container">
        <Advisors />
      </div>
      <Benefit />
      <div className="vinras-container">
        <HomeTestimonial />
        <Map />
      </div>

      <Blog />
    </>
  );
};

export default Home;
