import React from "react";
import Advisors from "../../components/homeComp/advisors/Advisors";
import CompanySkills from "../../components/pageComp/companySkills/CompanySkills";
import Faq from "../../components/pageComp/faq/Faq";
import SectionTitleLeft from "../../components/share/sectionTitle/SectionTitleLeft";
import TopBanner from "../../components/share/topBanner/TopBanner";

const AboutUs = () => {
  return (
    <div>
      <TopBanner routeName="About us" path1="Home" path2="About us" />

      {/* business plan */}
      <div className="bg-[url(https://i.ibb.co/6rwJyvw/BG.png)] bg-no-repeat bg-cover bg-center my-7">
        <div className="vinras-container"></div>
        <div className="vinras-container">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center shadow-xl mx-auto">
            <div className="relative">
              <div className="">
                <img
                  className="max-w-full"
                  src="../images/layer-1.png"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="">
                <div className="bg-[#F94D1C] py-[47px] px-9 block absolute bottom-0 right-0">
                  <h2 className="text-[40px] font-bold text-white">
                    12k <sup>+</sup> <br /> Projects <br /> Complete{" "}
                  </h2>
                </div>
                <div className="bg-[#F94D1C] py-[47px] px-9 block absolute top-0 right-0">
                  <h2 className="text-[25px] font-semibold text-white">
                    10<sup>+</sup> Year <br /> Experience{" "}
                  </h2>
                </div>
              </div>
            </div>
            <div className="md:ml-16">
              <SectionTitleLeft
                title="About us"
                titleHeading="We are more than you imagine"
              />

              <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-14 mt-12">
                <div className="">
                  <div className="">
                    <img src="/images/icon-6.png" alt="" srcset="" />
                  </div>
                  <h3 className="text-[22px] font-semibold mt-4 mb-2">
                    Brand Solution
                  </h3>
                  <p className="text-[15px]">
                    Multiply moved in also real after fish males beast doesn
                    give
                  </p>
                </div>
                <div className="">
                  <div className="">
                    <img src="/images/icon-7.png" alt="" srcset="" />
                  </div>
                  <h3 className="text-[22px] font-semibold mt-4 mb-2">
                    Our Mission
                  </h3>
                  <p className="text-[15px]">
                    Multiply moved in also real after fish males beast doesn
                    give
                  </p>
                </div>
              </div>
              <p className="text-[15px] mt-6 mb-10">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qofficia mollianim id est laborum. Sed ut perspiciatis unde
                omnis iste natuvoluptateaccusantium Nemo enim ipsam voluptatem
              </p>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                <div className="block">
                  <div className="border-black rounded border-2 border-dashed p-5 flex justify-between items-center">
                    <h2 className="text-[50px] font-medium text-black">
                      10<sup>+</sup> <br />{" "}
                    </h2>
                    <h3 className="text-[20px] font-medium">
                      Years Of <br /> Experience{" "}
                    </h3>
                  </div>
                </div>
                <div className="block">
                  <div className="border-black rounded border-2 border-dashed p-5 flex justify-between items-center">
                    <h2 className="text-[50px] font-medium text-black">
                      70<sup>k</sup> <br />{" "}
                    </h2>
                    <h3 className="text-[20px] font-medium">
                      Clients <br /> Individual{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* company skills */}
      <CompanySkills />

      <Faq />
      <Advisors />
    </div>
  );
};

export default AboutUs;
