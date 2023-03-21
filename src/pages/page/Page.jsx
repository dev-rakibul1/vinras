import React from "react";
import Article from "../../components/pageComp/Article/Article";
import BusinessPlan from "../../components/pageComp/businessPlan/BusinessPlan";
import Case from "../../components/pageComp/case/Case";
import CompanySkills from "../../components/pageComp/companySkills/CompanySkills";
import Faq from "../../components/pageComp/faq/Faq";
import MapTwo from "../../components/pageComp/mapTwo/MapTwo";
import PageHero from "../../components/pageComp/pageHero/PageHero";
import Services from "../../components/pageComp/services/Services";

const Page = () => {
  return (
    <>
      <PageHero />
      <BusinessPlan />
      <Services />
      <Case />

      <CompanySkills />
      <Faq />
      <MapTwo />
      {/* <Testimonial /> */}
      <Article />
    </>
  );
};

export default Page;
