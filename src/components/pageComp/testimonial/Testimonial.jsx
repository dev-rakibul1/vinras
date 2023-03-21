import React from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi";
import SectionTitleCenter from "../../share/sectionTitle/SectionTitleCenter";
const bgImages = "../images/BG.png";

const Testimonial = () => {
  return (
    <section className="py-24">
      <div className="vinras-container">
        <div className="my-7">
          <SectionTitleCenter
            title="Testimonial"
            titleHeading="What say our client"
          />
        </div>

        {/* content area */}
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 gap-7">
          <article
            className="bg-cover min-h-full h-full bg-[100%] max-h-full w-full bg-no-repeat p-7"
            style={{ backgroundImage: `url(${bgImages})` }}
          >
            <div className="py-4">
              <ul className="flex items-center justify-start text-[#FF5E14]">
                <li className="text-[#FF5E14]">
                  <HiStar />
                </li>
                <li className="text-[#FF5E14]">
                  <HiStar />
                </li>
                <li className="text-[#FF5E14]">
                  <HiStar />
                </li>
                <li className="text-[#FF5E14]">
                  <HiStar />
                </li>
                <li className="text-[#FF5E14]">
                  <HiOutlineStar />
                </li>
              </ul>
            </div>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              enim ad minim veniam, quis nostrupidatat exercitation ullamco
              laboris nisi a ut aliquip ex ea commodo a consequat. reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Sed ut perspiciatis unde
              omnis iste natus error sit voluptatem accusantium doloremque
              laudantium.
            </p>
            {/* client */}
            <div className="my-4 sm:flex items-center justify-start ">
              <div>
                <img
                  src="../images/testimonial/Bitmap-1.png"
                  className="w-[60px]"
                  alt="testimonial"
                />
              </div>

              <div className="ml-7">
                <h4 className="text-xl font-bold">John Smith</h4>
                <p>Founder, Seo</p>
              </div>
            </div>
          </article>

          <article
            className="bg-cover min-h-full h-full bg-[100%] max-h-full w-full bg-no-repeat p-7"
            style={{ backgroundImage: `url(${bgImages})` }}
          >
            <div className="py-4">
              <ul className="flex items-center justify-start text-[#FF5E14]">
                <li className="text-[#FF5E14]">
                  <HiStar />
                </li>
                <li className="text-[#FF5E14]">
                  <HiStar />
                </li>
                <li className="text-[#FF5E14]">
                  <HiStar />
                </li>
                <li className="text-[#FF5E14]">
                  <HiStar />
                </li>
                <li className="text-[#FF5E14]">
                  <HiOutlineStar />
                </li>
              </ul>
            </div>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              enim ad minim veniam, quis nostrupidatat exercitation ullamco
              laboris nisi a ut aliquip ex ea commodo a consequat. reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Sed ut perspiciatis unde
              omnis iste natus error sit voluptatem accusantium doloremque
              laudantium.
            </p>
            {/* client */}
            <div className="my-4 sm:flex items-center justify-start ">
              <div>
                <img
                  src="../images/testimonial/Bitmap-1.png"
                  className="w-[60px]"
                  alt="testimonial"
                />
              </div>

              <div className="ml-7">
                <h4 className="text-xl font-bold">John Smith</h4>
                <p>Founder, Seo</p>
              </div>
            </div>
          </article>

          <article
            className="bg-cover min-h-full h-full bg-[100%] max-h-full w-full bg-no-repeat p-7"
            style={{ backgroundImage: `url(${bgImages})` }}
          >
            <div className="py-4">
              <ul className="flex items-center justify-start text-[#FF5E14]">
                <li className="text-[#FF5E14]">
                  <HiStar />
                </li>
                <li className="text-[#FF5E14]">
                  <HiStar />
                </li>
                <li className="text-[#FF5E14]">
                  <HiStar />
                </li>
                <li className="text-[#FF5E14]">
                  <HiStar />
                </li>
                <li className="text-[#FF5E14]">
                  <HiOutlineStar />
                </li>
              </ul>
            </div>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              enim ad minim veniam, quis nostrupidatat exercitation ullamco
              laboris nisi a ut aliquip ex ea commodo a consequat. reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Sed ut perspiciatis unde
              omnis iste natus error sit voluptatem accusantium doloremque
              laudantium.
            </p>
            {/* client */}
            <div className="my-4 sm:flex items-center justify-start ">
              <div>
                <img
                  src="../images/testimonial/Bitmap-1.png"
                  className="w-[60px]"
                  alt="testimonial"
                />
              </div>

              <div className="ml-7">
                <h4 className="text-xl font-bold">John Smith</h4>
                <p>Founder, Seo</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
