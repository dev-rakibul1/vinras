import React from "react";
import { TfiAngleDoubleRight } from "react-icons/tfi";

const PageHero = () => {
  return (
    <div>
      <div
        className="h-[100vh] flex items-end"
        style={{
          backgroundImage: `linear-gradient(rgb(3 3 3 / 51%),rgb(3 3 3 / 51%)),url(${"https://i.ibb.co/zXDLDf2/bgbg.png"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="vinras-container my-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="">
              <div className="text-[20px] font-medium text-white">
                <span>Technology </span> <span>|</span> <span> Business </span>{" "}
                <span> | </span> <span>Consultan</span>
              </div>
              <h2 className="2xl:text-[90px] text-[60px] font-bold text-white leading-[55px]">
                Best Grow Your Business
              </h2>
              <p className="text-[20px] font-semibold text-white mt-4">
                Our Best Business Technology Consulting
              </p>
              <button className="flex justify-between items-center py-4 px-7 bg-[#F94D1C] text-white rounded-full mt-7">
                Free Consultation <TfiAngleDoubleRight className="ml-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
