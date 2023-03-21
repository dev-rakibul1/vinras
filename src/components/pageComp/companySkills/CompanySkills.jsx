import React from "react";
import SectionTitleLeft from "../../share/sectionTitle/SectionTitleLeft";

const CompanySkills = () => {
  return (
    <div className="py-24">
      <div className="vinras-container bg-[#fafafa] my-24 md:p-24">
        <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-14">
          <div className="">
            <div className="">
              <SectionTitleLeft
                title="Company Skills"
                titleHeading="Exclusive Work Skill"
              />

              <div className="">
                <div className="mb-6">
                  <div className="w-[80%] flex justify-between mb-2">
                    <h3 className="text-[16px] font-bold">Web Design</h3>
                    <h3 className="text-[16px] font-bold">80%</h3>
                  </div>
                  <div className="bg-[#fefefe] w-full rounded-[20px] h-4 block shadow">
                    <div className="bg-[#F94D1C] w-[80%] rounded-[20px] h-4 block"></div>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="w-[58%] flex justify-between mb-2">
                    <h3 className="text-[16px] font-bold">Web Development</h3>
                    <h3 className="text-[16px] font-bold">48%</h3>
                  </div>
                  <div className="bg-[#fefefe] w-full rounded-[20px] h-4 block shadow">
                    <div className="bg-[#F94D1C] w-[58%] rounded-[20px] h-4 block"></div>
                  </div>
                </div>
                <div className="">
                  <div className="w-[38%] flex justify-between mb-2">
                    <h3 className="text-[16px] font-bold">Web application</h3>
                    <h3 className="text-[16px] font-bold">28%</h3>
                  </div>
                  <div className="bg-[#fefefe] w-full rounded-[20px] h-4 block shadow">
                    <div className="bg-[#F94D1C] w-[38%] rounded-[20px] h-4 block"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:mt-[-35%] md:mr-[-15%]">
            <img
              className=" w-full"
              src="../images/skills/company-skill.png"
              alt=""
              srcset=""
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-11 items-center mt-24 justify-between">
          <div className="flex items-center gap-7">
            <div className="bg-[#F94D1C] h-[125px] w-[125px] flex items-center justify-center">
              <img src="../images/skills/icon-1.png" alt="" srcset="" />
            </div>
            <div className="">
              <h2 className="text-[40px] font-bold">
                20<sup>k</sup>
              </h2>
              <p className="text-[18px] font-semibold">Completed Cases</p>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <div className="bg-[#F94D1C] h-[125px] w-[125px] flex items-center justify-center">
              <img src="../images/skills/icon-2.png" alt="" srcset="" />
            </div>
            <div className="">
              <h2 className="text-[40px] font-bold">
                10<sup>k</sup>
              </h2>
              <p className="text-[18px] font-semibold">Satisfied Customers</p>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <div className="bg-[#F94D1C] h-[125px] w-[125px] flex items-center justify-center">
              <img src="../images/skills/icon-3.png" alt="" srcset="" />
            </div>
            <div className="">
              <h2 className="text-[40px] font-bold">
                18<sup>k</sup>
              </h2>
              <p className="text-[18px] font-semibold">Expert Consultant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySkills;
