import React from "react";
import { RxExit } from "react-icons/rx";
import CompanySkills from "../../components/pageComp/companySkills/CompanySkills";
import Faq from "../../components/pageComp/faq/Faq";
import MapTwo from "../../components/pageComp/mapTwo/MapTwo";
import Testimonial from "../../components/pageComp/testimonial/Testimonial";
import SectionTitleCenter from "../../components/share/sectionTitle/SectionTitleCenter";
import TopBanner from "../../components/share/topBanner/TopBanner";

const ServicesPage2 = () => {
  return (
    <div>
      <TopBanner routeName="Service - 2" path1="Home" path2="Service - 2" />
      {/* Services */}
      <div className="bg-[url(https://i.ibb.co/1vqrgfY/Layer-76.png)] bg-no-repeat bg-cover bg-[#fafafa] py-12">
        <div className="vinras-container">
          <div className=" lg:max-w-full">
            <div className="py-24">
              <SectionTitleCenter
                title="Our Services"
                titleHeading="What we are offering"
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
      <Faq />
      <CompanySkills />
      <MapTwo />
      <Testimonial />
    </div>
  );
};

export default ServicesPage2;
