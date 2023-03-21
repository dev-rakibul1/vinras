import React from "react";

const SectionTitleLeft = ({ title, titleHeading }) => {
  return (
    <div>
      <div className="section-title ">
        <h3 className="text-[#F94D1C] flex justify-start items-center font-semibold">
          {title}{" "}
          <span className="w-12 h-[2px] inline-block bg-[#F94D1C] ml-4"></span>
        </h3>

        <div className="title-heading">
          <h1 className="font-bold text-4xl mb-4">{titleHeading}</h1>
        </div>
      </div>
    </div>
  );
};

export default SectionTitleLeft;
