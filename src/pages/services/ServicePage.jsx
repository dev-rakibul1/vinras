import React from "react";
import Agency from "../../components/homeComp/agency/Agency";
import Counter from "../../components/homeComp/counter/Counter";
import LiveDis from "../../components/homeComp/liveDis/LiveDis";
import Services from "../../components/homeComp/service/Services";
import HomeTestimonial from "../../components/homeComp/testimonial/HomeTestimonial";
import TopBanner from "../../components/share/topBanner/TopBanner";

const ServicePage = () => {
  return (
    <div>
      <TopBanner routeName="Service" path1="Home" path2="Service" />
      <Services />
      <LiveDis />
      <div className="vinras-container">
        <Agency />
      </div>
      <Counter />
      <HomeTestimonial />
    </div>
  );
};

export default ServicePage;
