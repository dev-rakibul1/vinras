import React from "react";
import SectionTitleLeft from "../../share/sectionTitle/SectionTitleLeft";

const Map = () => {
  return (
    <div>
      <div className="">
        <div
          style={{
            position: "relative",
            textAlign: "right",
            height: "640px",
            width: "100%",
            zIndex: "-1",
          }}
          class="mapouter"
        >
          <div
            class="gmap_canvas"
            style={{
              overflow: "hidden",
              background: "none !important",
              height: "640px",
              width: "100%",
            }}
          >
            <iframe
              width="100%"
              height="640"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=ridigames,tomaltola,bagatipara,natore&t=&z=17&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              security=""
              title="ridigames"
            ></iframe>
            <a href="https://123movies-to.org"> </a> <br />{" "}
            <a href="https://www.embedgooglemap.net">
              embedding google maps in html
            </a>{" "}
          </div>
        </div>

        <div className="container lg:w-[90%]">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-14 my-16 items-center">
            <div className="z-[-1]">
              {/* section title */}
              <div className="my-7">
                <div className="vinras-container">
                  <SectionTitleLeft
                    title="Steps Of Procedure"
                    titleHeading="Creating Value Through 
                    Business"
                  />
                </div>
              </div>

              <p>
                Duis nunc sodales conubia a laoreet aliquet on nostra eleifend
                lacinia prasent hendrerit quisque penatibus erat a pulvina
                integer semper ridiculus lectus con dimentum obor tise verodar
                capmtaso morin
              </p>
              <div className="flex items-center justify-between mt-7">
                <p className="font-medium">Client Satisfaction</p>
                <p className="font-medium">90%</p>
              </div>
              <div className="bg-[#f3f5f9] border-[1px] border-[#F94F1F] p-[2px] w-full">
                <div className="bg-[#F94F1F] w-[90%] h-2"></div>
              </div>
            </div>
            <div className="">
              <div
                style={{ zIndex: "9" }}
                className="bg-white rounded-[20px] w-auto shadow-lg p-12 text-center lg:w-[75%] mx-auto lg:mt-[-200px]"
              >
                <h2 className="text-[30px] font-semibold uppercase mb-7">
                  Get a free quote{" "}
                </h2>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input w-full mb-[10px] bg-[#f4f5f8] px-7 py-7"
                />
                <input
                  type="text"
                  placeholder="Email Address"
                  className="input w-full mb-[10px] bg-[#f4f5f8] px-7 py-7"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="input w-full mb-[10px] bg-[#f4f5f8] px-7 py-7"
                />
                <input
                  type="text"
                  placeholder="Choose Service"
                  className="input w-full mb-[10px] bg-[#f4f5f8] px-7 py-7"
                />
                <button className=" bg-[#F94F1F] py-3 px-7 rounded-md text-white">
                  Request a quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
