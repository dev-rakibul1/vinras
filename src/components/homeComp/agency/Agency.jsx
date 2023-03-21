import React from "react";
import { CgChevronDoubleRight } from "react-icons/cg";
import SectionTitleLeft from "../../share/sectionTitle/SectionTitleLeft";

const Agency = () => {
  return (
    <div className="md:max-w-[65%] mx-auto my-20">
      {/* section title */}
      <div className="my-7">
        <SectionTitleLeft
          title="How can help you"
          titleHeading="We make bright agency"
        />
      </div>

      {/* agency content */}
      <div className="agency-content grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 mt-12">
        {/* article 01 */}
        <article className="p-2">
          <div className="images max-w-[70px]">
            <img
              src="../images/agency/agency-1.png"
              className="max-w-full"
              alt=""
            />
          </div>
          <div className="my-4">
            <h3 className="font-semibold text-xl">Product Engineering</h3>
            <p className="text-[13px] my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio hic debitis nam. Adipisci, ipsa accusantium!
            </p>
          </div>

          <ul className="text-[13px]">
            <li className="flex items-center justify-start mt-1">
              <CgChevronDoubleRight className="text-[#F94D1C] mr-2" /> Logo &
              Branding
            </li>
            <li className="flex items-center justify-start mt-1">
              <CgChevronDoubleRight className="text-[#F94D1C] mr-2" /> Website
              Design
            </li>
            <li className="flex items-center justify-start mt-1">
              <CgChevronDoubleRight className="text-[#F94D1C] mr-2" /> Mobile
              App Design
            </li>
            <li className="flex items-center justify-start mt-1">
              <CgChevronDoubleRight className="text-[#F94D1C] mr-2" />{" "}
              Graphic/Print Design
            </li>
            <li className="flex items-center justify-start mt-1">
              <CgChevronDoubleRight className="text-[#F94D1C] mr-2" /> Video
              Production
            </li>
          </ul>
        </article>

        {/* article 02 */}
        <article className="p-2">
          <div className="images max-w-[70px]">
            <img
              src="../images/agency/agency-2.png"
              className="max-w-full"
              alt=""
            />
          </div>
          <div className="my-4">
            <h3 className="font-semibold text-xl">Technology Services</h3>
            <p className="text-[13px] my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio hic debitis nam. Adipisci, ipsa accusantium!
            </p>
          </div>

          <ul className="text-[13px]">
            <li className="flex items-center justify-start mt-1">
              <CgChevronDoubleRight className="text-[#F94D1C] mr-2" /> Logo &
              Branding
            </li>
            <li className="flex items-center justify-start mt-1">
              <CgChevronDoubleRight className="text-[#F94D1C] mr-2" /> Website
              Design
            </li>
            <li className="flex items-center justify-start mt-1">
              <CgChevronDoubleRight className="text-[#F94D1C] mr-2" /> Mobile
              App Design
            </li>
            <li className="flex items-center justify-start mt-1">
              <CgChevronDoubleRight className="text-[#F94D1C] mr-2" />{" "}
              Graphic/Print Design
            </li>
            <li className="flex items-center justify-start mt-1">
              <CgChevronDoubleRight className="text-[#F94D1C] mr-2" /> Video
              Production
            </li>
          </ul>
        </article>

        {/* article 03 */}
        <article className="p-2">
          <div className="images max-w-[70px]">
            <img
              src="../images/agency/agency-3.png"
              className="max-w-full"
              alt=""
            />
          </div>
          <div className="my-4">
            <h3 className="font-semibold text-xl">Digital Solutions</h3>
            <p className="text-[13px] my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio hic debitis nam. Adipisci, ipsa accusantium!
            </p>
          </div>

          <ul className="text-[13px]">
            <li className="flex items-center justify-start mt-1">
              <CgChevronDoubleRight className="text-[#F94D1C] mr-2" /> Logo &
              Branding
            </li>
            <li className="flex items-center justify-start mt-1">
              <CgChevronDoubleRight className="text-[#F94D1C] mr-2" /> Website
              Design
            </li>
            <li className="flex items-center justify-start mt-1">
              <CgChevronDoubleRight className="text-[#F94D1C] mr-2" /> Mobile
              App Design
            </li>
            <li className="flex items-center justify-start mt-1">
              <CgChevronDoubleRight className="text-[#F94D1C] mr-2" />{" "}
              Graphic/Print Design
            </li>
            <li className="flex items-center justify-start mt-1">
              <CgChevronDoubleRight className="text-[#F94D1C] mr-2" /> Video
              Production
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
};

export default Agency;
