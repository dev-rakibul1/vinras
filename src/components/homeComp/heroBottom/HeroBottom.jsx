import React from "react";
import "./HeroBottom.css";

const HeroBottom = () => {
  return (
    <div className="my-4">
      <div className="hero-bottom-box flex items-center justify-between">
        <div className="single-items p-4 flex flex-col justify-center items-center rounded-sm">
          <span className="w-12 h-12 rounded-full bg-[#F94D1C] flex items-center justify-center text-white p-2">
            icon
          </span>
          <h4 className="font-semibold text-xl">Ui/Ux Design</h4>
        </div>

        <div className="single-items p-4 flex flex-col justify-center items-center rounded-sm">
          <span className="w-12 h-12 rounded-full bg-[#F94D1C] flex items-center justify-center text-white p-2">
            icon
          </span>
          <h4 className="font-semibold text-xl">Committed Quality</h4>
        </div>

        <div className="single-items p-4 flex flex-col justify-center items-center rounded-sm">
          <span className="w-12 h-12 rounded-full bg-[#F94D1C] flex items-center justify-center text-white p-2">
            icon
          </span>
          <h4 className="font-semibold text-xl">Tax Consulting</h4>
        </div>

        <div className="single-items p-4 flex flex-col justify-center items-center rounded-sm">
          <span className="w-12 h-12 rounded-full bg-[#F94D1C] flex items-center justify-center text-white p-2">
            icon
          </span>
          <h4 className="font-semibold text-xl">Tax Strategy</h4>
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
