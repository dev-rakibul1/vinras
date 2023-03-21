import React from "react";
import {} from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import SectionTitleCenter from "../../share/sectionTitle/SectionTitleCenter";

const Services = () => {
  return (
    <div className="bg-[url(https://i.ibb.co/1vqrgfY/Layer-76.png)] bg-no-repeat bg-cover bg-[#fafafa] my-24">
      <div className="vinras-container">
        <div className=" lg:max-w-full">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-7">
            <div className=" md:mt-[-50%]">
              <div className="homeTow-service-card cursor-pointer bg-white hover:bg-[#F94D1C] transition-all duration-700 p-14 border shadow">
                <div className="flex justify-center mb-7">
                  <img
                    className="icon-w"
                    src="../images/services/iconWhite-1.png"
                    alt=""
                    srcset=""
                  />
                  <img
                    className="icon-n"
                    src="../images/services/icon-1.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <p className="text-[18px] text-center font-semibold">
                  We Experience <br /> Build
                </p>
              </div>
            </div>
            <div className="  md:mt-[-50%]">
              <div className="homeTow-service-card cursor-pointer bg-white hover:bg-[#F94D1C] transition-all duration-700 p-14 border shadow">
                <div className="flex justify-center mb-7">
                  <img
                    className="icon-w"
                    src="../images/services/iconWhite-2.png"
                    alt=""
                    srcset=""
                  />
                  <img
                    className="icon-n"
                    src="../images/services/icon-2.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <p className="text-[18px] text-center font-semibold">
                  Highest Success Rates
                </p>
              </div>
            </div>
            <div className="  md:mt-[-50%]">
              <div className="homeTow-service-card cursor-pointer bg-white hover:bg-[#F94D1C] transition-all duration-700 p-14 border shadow">
                <div className="flex justify-center mb-7">
                  <img
                    className="icon-w"
                    src="../images/services/iconWhite-3.png"
                    alt=""
                    srcset=""
                  />
                  <img
                    className="icon-n"
                    src="../images/services/icon-3.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <p className="text-[18px] text-center font-semibold">
                  Branding Strengh Solution{" "}
                </p>
              </div>
            </div>
            <div className="  md:mt-[-50%]">
              <div className="homeTow-service-card cursor-pointer bg-white hover:bg-[#F94D1C] transition-all duration-700 p-14 border shadow">
                <div className="flex justify-center mb-7">
                  <img
                    className="icon-w"
                    src="../images/services/iconWhite-4.png"
                    alt=""
                    srcset=""
                  />
                  <img
                    className="icon-n"
                    src="../images/services/icon-4.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <p className="text-[18px] text-center font-semibold">
                  Personal & Business Insurance
                </p>
              </div>
            </div>
          </div>
          <div className="py-24">
            <SectionTitleCenter
              title="Our Services"
              titleHeading="Our Popular Service"
            />

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-16 gap-5">
              <div className="">
                <div className="card bg-base-100 shadow-xl">
                  <figure>
                    <img
                      className="w-full"
                      src="../images/services/ser-1.png"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="flex items-end justify-between mt-[-17%]">
                      <p className="text-[#878c8f] text-[14px]">
                        Creative, Designs, Business
                      </p>
                      <div className="bg-[#F94D1C] text-white rounded-t">
                        <h2 className="p-4 text-3xl font-bold text-center">
                          <RxExit />
                        </h2>
                      </div>
                    </div>
                    <div className="flex items-end gap-[30px]">
                      <div className="">
                        <h3 className="text-[22px] font-bold">
                          Product Engineering
                        </h3>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qoffic{" "}
                        </p>
                      </div>
                      <div className="bg-[#f3f3f4] p-4 rounded">
                        <img
                          className="w-[60px] h-[40px]"
                          src="../images/services/analysis-1.png"
                          alt=""
                          srcset=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="card bg-base-100 shadow-xl">
                  <figure>
                    <img
                      className="w-full"
                      src="../images/services/ser-2.png"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="flex items-end justify-between mt-[-17%]">
                      <p className="text-[#878c8f] text-[14px]">
                        Creative, Designs, Business
                      </p>
                      <div className="bg-[#F94D1C] text-white rounded-t">
                        <h2 className="p-4 text-3xl font-bold text-center">
                          <RxExit />
                        </h2>
                      </div>
                    </div>
                    <div className="flex items-end gap-[30px]">
                      <div className="">
                        <h3 className="text-[22px] font-bold">
                          Marketing Solution
                        </h3>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qoffic{" "}
                        </p>
                      </div>
                      <div className="bg-[#f3f3f4] p-4 rounded">
                        <img
                          className="w-[60px] h-[40px]"
                          src="../images/services/analysis-2.png"
                          alt=""
                          srcset=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="card bg-base-100 shadow-xl">
                  <figure>
                    <img
                      className="w-full"
                      src="../images/services/ser-3.png"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="flex items-end justify-between mt-[-17%]">
                      <p className="text-[#878c8f] text-[14px]">
                        Creative, Designs, Business
                      </p>
                      <div className="bg-[#F94D1C] text-white rounded-t">
                        <h2 className="p-4 text-3xl font-bold text-center">
                          <RxExit />
                        </h2>
                      </div>
                    </div>
                    <div className="flex items-end gap-[30px]">
                      <div className="">
                        <h3 className="text-[22px] font-bold">
                          Web Development
                        </h3>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qoffic{" "}
                        </p>
                      </div>
                      <div className="bg-[#f3f3f4] p-4 rounded">
                        <img
                          className="w-[60px] h-[40px]"
                          src="../images/services/analysis-3.png"
                          alt=""
                          srcset=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
