import React from "react";
import Advisors from "../../components/homeComp/advisors/Advisors";
import TopBanner from "../../components/share/topBanner/TopBanner";

const Member = () => {
  return (
    <div>
      <div>
        <TopBanner routeName="Our Member" path1="Home" path2="Our member" />
      </div>

      <div className="vinras-container">
        <Advisors />
      </div>
    </div>
  );
};

export default Member;
