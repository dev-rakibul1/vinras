import React from "react";
import { CgPlayButton } from "react-icons/cg";
import "./LiveDis.css";

const LiveDis = () => {
  return (
    <div className="vinras-container py-12">
      <div className="live-dic-title my-12 text-center">
        <h2 className="text-2xl font-bold">Live Our Busniess Discussion</h2>
        <p>Ut enim ad minim veniam, quis nostrud </p>
      </div>

      {/* live dis content */}
      <div className="live-dis-content">
        {/* banner area */}
        <div className="live-dis-banner relative overflow-hidden">
          <img src="https://i.ibb.co/17ZFVCy/Layer-81.png" alt="" />

          {/* video shape */}
          <div className="video-shape">
            <div className="video-border w-16 h-16 flex justify-center items-center rounded-full border border-gray-200 m-4">
              <span className="w-12 h-12 flex justify-center items-center rounded-full border border-gray-200 text-7xl text-orange-600  bg-white">
                <CgPlayButton />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDis;
