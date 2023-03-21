import React, { useState } from "react";
import { GrFormUp } from "react-icons/gr";
import { TbTargetArrow } from "react-icons/tb";
import { Link } from "react-router-dom";
import SectionTitleLeft from "../../share/sectionTitle/SectionTitleLeft";
import "./Benefit.css";

const Benefit = () => {
  const [accordionOne, setAccordionOne] = useState(false);
  const [accordionTow, setAccordionTow] = useState(false);
  const [accordionThree, setAccordionThree] = useState(false);

  const handleAccordionOne = () => {
    setAccordionOne(!accordionOne);
  };

  const handleAccordionTwo = () => {
    setAccordionTow(!accordionTow);
  };

  const handleAccordionThree = () => {
    setAccordionThree(!accordionThree);
  };

  console.log(accordionOne);

  return (
    <div className="my-40">
      {/* section title */}
      <div className="my-7">
        <div className="vinras-container">
          <SectionTitleLeft
            title="Our benefit"
            titleHeading="Success Building Experience"
          />
        </div>
      </div>

      <div className="benefit-wrapper relative">
        <div className="md:flex items-center justify-between">
          {/* benefit content */}
          <div className="vinras-container">
            <div className="benefit-content flex items-center justify-between">
              <div className="benefit-progress flex-none">
                <div>
                  <div
                    className="radial-progress"
                    style={{
                      "--value": "92",
                      "--size": "7rem",
                      "--thickness": "2px",
                    }}
                  >
                    92%
                  </div>
                  <h3 className="my-4 font-semibold">Affordable Cost</h3>
                </div>

                <div>
                  <div
                    className="radial-progress"
                    style={{
                      "--value": "52",
                      "--size": "7rem",
                      "--thickness": "2px",
                    }}
                  >
                    52%
                  </div>
                  <h3>Quality of work</h3>
                </div>
              </div>

              <div className="grow ml-7">
                {/* accordion 01 */}
                <div className="benefit-accordion max-w-[45%] mr-auto">
                  <div
                    className="border-b-[1px] border-gray-300 p-2 cursor-pointer"
                    onClick={handleAccordionOne}
                  >
                    <div className="flex justify-between items-start">
                      <h2>Think Ahead And Boost Your Business?</h2>
                      <span
                        className={`ml-12 ${
                          accordionOne ? "icon-rotated" : "icon-transition"
                        }`}
                      >
                        <GrFormUp />
                      </span>
                    </div>
                  </div>
                  <div
                    className={` py-4 ${
                      accordionOne ? "accordion-on" : "accordion-off"
                    }`}
                  >
                    <p>
                      Suspendisse finibus urna mauris, vitae consequat quam vel.
                      Vestibulum leo ligula, vit commodo nisl Sed luctus
                      venenatis pellentesque.
                    </p>
                  </div>
                </div>

                {/* accordion 02 */}
                <div className="benefit-accordion max-w-[45%] mr-auto mt-4">
                  <div
                    className="border-b-[1px] border-gray-300 p-2 cursor-pointer"
                    onClick={handleAccordionTwo}
                  >
                    <div className="flex justify-between items-start">
                      <h2>Maecenas condimentum sollicitudin ligula,</h2>
                      <span
                        className={`ml-12 ${
                          accordionTow ? "icon-rotated" : "icon-transition"
                        }`}
                      >
                        <GrFormUp />
                      </span>
                    </div>
                  </div>
                  <div
                    className={` py-4 ${
                      accordionTow ? "accordion-on" : "accordion-off"
                    }`}
                  >
                    <p>
                      Suspendisse finibus urna mauris, vitae consequat quam vel.
                      Vestibulum leo ligula, vit commodo nisl Sed luctus
                      venenatis pellentesque.
                    </p>
                  </div>
                </div>

                {/* accordion 03 */}
                <div className="benefit-accordion max-w-[45%] mr-auto mt-4">
                  <div
                    className="border-b-[1px] border-gray-300 p-2 cursor-pointer"
                    onClick={handleAccordionThree}
                  >
                    <div className="flex justify-between items-start">
                      <h2>What Is The Best Advice For Growth?</h2>
                      <span
                        className={`ml-12 ${
                          accordionThree ? "icon-rotated" : "icon-transition"
                        }`}
                      >
                        <GrFormUp />
                      </span>
                    </div>
                  </div>
                  <div
                    className={` py-4 ${
                      accordionThree ? "accordion-on" : "accordion-off"
                    }`}
                  >
                    <p>
                      Suspendisse finibus urna mauris, vitae consequat quam vel.
                      Vestibulum leo ligula, vit commodo nisl Sed luctus
                      venenatis pellentesque.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="benefit-thum md:absolute left-[55%] bottom-0 mt-7 md:mt-0">
            <img src="../images/benefit.png" alt="" className="max-w-full" />

            {/* article */}
            <div className="benefit-article-border bg-[#F94D1C] p-7 sm:max-w-[50%] flex justify-between items-start ">
              <div className="text-4xl text-white">
                <TbTargetArrow />
              </div>
              <div className=" ml-4">
                <h3 className="text-2xl text-white font-semibold">
                  25K project are completed
                </h3>
                <Link
                  to="/"
                  className="text-white font-light uppercase mt-7 text-xs inline-block border-b"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
