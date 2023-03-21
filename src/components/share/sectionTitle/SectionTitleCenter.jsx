import React from "react";

const SectionTitleCenter = ({ title, titleHeading }) => {
  return (
    <div>
      <div className="section-title flex items-center justify-center flex-col ">
        <div className="flex items-center justify-center">
          <span className="w-12 h-[2px] inline-block bg-[#F94D1C] mr-4"></span>
          <h3 className="text-[#F94D1C] flex justify-start items-center font-semibold">
            {title}{" "}
          </h3>
          <span className="w-12 h-[2px] inline-block bg-[#F94D1C] ml-4"></span>
        </div>

        <div className="title-heading">
          <h1 className="font-bold text-4xl mb-4">{titleHeading}</h1>
        </div>
      </div>
    </div>
  );
};

export default SectionTitleCenter;
