import React from "react";
import { GoPlus } from "react-icons/go";
import SectionTitleLeft from "../../components/share/sectionTitle/SectionTitleLeft";
import TopBanner from "../../components/share/topBanner/TopBanner";
import "./Portfolio.css";

const OurPortfolio = () => {
  return (
    <div className="mb-12">
      <div className="mb-7">
        <TopBanner
          routeName="Our portfolio"
          path1="Home"
          path2="our portfolio"
        />
      </div>

      {/* content */}
      <div className="vinras-container mt-12">
        <div>
          {/* gallery */}
          <div>
            <div className="grid xs:grid-cols-1  sm:grid-cols-2  md:grid-cols-2  lg:grid-cols-2  xl:grid-cols-2 gap-7 items-start">
              <div className="row-span-3 mt-20">
                <div className="mt-7">
                  <SectionTitleLeft
                    title="working process"
                    titleHeading="Our work showcase"
                  />

                  <div
                    className="project-link mb-7"
                    style={{ borderLeft: "2px solid green" }}
                  >
                    <span className="py-3 px-4 no-underline cursor-pointer hover:text-[#F94D1C] font-bold">
                      All
                    </span>
                    <span className="py-3 px-4 no-underline cursor-pointer hover:text-[#F94D1C] font-bold">
                      Web design
                    </span>
                    <span className="py-3 px-4 no-underline cursor-pointer hover:text-[#F94D1C] font-bold">
                      Branding
                    </span>
                    <span className="py-3 px-4 no-underline cursor-pointer hover:text-[#F94D1C] font-bold">
                      Photography
                    </span>
                  </div>
                </div>
                <div className="gallery-box">
                  <div className="gallery-items">
                    <img
                      src="../images/gallery/gallery-1.png"
                      alt="gallery"
                      className="w-full max-w-full"
                    />
                    <span className="gallery-icon">
                      <GoPlus />
                    </span>
                  </div>
                </div>
              </div>

              <div className="gallery-box  row-span-2">
                <div className="gallery-items">
                  <img
                    src="../images/gallery/gallery-3.png"
                    alt="gallery"
                    className="w-full max-w-full"
                  />
                  <span className="gallery-icon">
                    <GoPlus />
                  </span>
                </div>
              </div>

              <div className="gallery-box">
                <div className="gallery-items">
                  <img
                    src="../images/gallery/gallery-4.png"
                    alt="gallery"
                    className="w-full max-w-full"
                  />
                  <span className="gallery-icon">
                    <GoPlus />
                  </span>
                </div>
              </div>

              <div className="gallery-box  row-span-2">
                <div className="gallery-items">
                  <img
                    src="../images/gallery/gallery-2.png"
                    alt="gallery"
                    className="w-full max-w-full h-full max-h-full"
                  />
                  <span className="gallery-icon">
                    <GoPlus />
                  </span>
                </div>
              </div>

              <div className="gallery-box">
                <div className="gallery-items">
                  <img
                    src="../images/gallery/gallery-5.png"
                    alt="gallery"
                    className="w-full max-w-full"
                  />
                  <span className="gallery-icon">
                    <GoPlus />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPortfolio;
