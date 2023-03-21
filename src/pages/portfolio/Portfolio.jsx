import React from "react";
import Case from "../../components/pageComp/case/Case";
import TopBanner from "../../components/share/topBanner/TopBanner";

const Portfolio = () => {
  return (
    <div>
      <div>
        <TopBanner routeName="Portfolio" path1="Home" path2="portfolio" />
      </div>
      <div className="py-12">
        <Case />
      </div>
    </div>
  );
};

export default Portfolio;
