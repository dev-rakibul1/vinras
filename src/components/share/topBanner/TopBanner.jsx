import React from "react";
import { BiChevronsRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./TopBanner.css";
const topBanner = "https://i.ibb.co/hDcWrJW/top-Banner.png";

const TopBanner = ({ routeName, path1, path2 }) => {
  return (
    <div className="top-banner bg-center bg-cover bg-fixed h-[90vh] flex justify-center items-center">
      <div className="md:max-w-[60%] mx-auto vinras-container py-7 ">
        <h2 className="text-5xl font-600 text-white font-bold">{routeName}</h2>
        <p className="flex items-center justify-start text-white my-4 text-xl">
          <Link>{path1}</Link> <BiChevronsRight /> <Link>{path2}</Link>
        </p>
      </div>
    </div>
  );
};

export default TopBanner;
