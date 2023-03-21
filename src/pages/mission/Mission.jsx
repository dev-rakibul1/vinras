import React from "react";
import { GrCheckmark } from "react-icons/gr";
import TopBanner from "../../components/share/topBanner/TopBanner";
import "./Mission.css";

const Mission = () => {
  return (
    <div>
      <div>
        <TopBanner routeName="Our Mission" path1="Home" path2="Mission" />
      </div>

      {/* content */}
      <div className="vinras-container py-12 h-full">
        <div className="flex items-center h-full max-h-full">
          <div className="w-full lg:max-w-[50%] mx-auto">
            <div className="top-row grid grid-cols-2 gap-7">
              <div>
                <img
                  src="../images/mission/mission-1.png"
                  alt="mission"
                  className="max-w-full w-full"
                />
              </div>
              <article>
                <p>
                  Ut enim ad minim veniam, in a anostrud exercitation ullamco
                  laboris nisi aliquip ex ea commconsequat. Duis aute irure
                  dolor in reprehenderit in a voluptate iinvelit esse cillum
                  dolore eu fugiat ulla pariatur. Except eur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium doloremque
                  laudantium,
                </p>
                <button className="px-5 py-3 font-semibold text-md bg-[#F94D1C] text-white mt-4">
                  Dicover more +
                </button>
              </article>
            </div>
          </div>

          <div className="mission-top-images"></div>
        </div>

        {/* content bottom */}
        <div className="w-full lg:max-w-[50%] mx-auto flex items-center justify-between my-36">
          <div className="mission-contained-1"></div>
          <div className="mission-contained">
            <h1 className="text-3xl font-normal py-7">
              Vinras Is A Very Strong Impact
            </h1>
            <p className="py-4 text-sm font-normal">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit
            </p>
            <ul>
              <li className="flex items-center mt-2 text-[14px] justify-start">
                <GrCheckmark className="mr-4" /> Nostrud exercitation ullamco
                laboris{" "}
              </li>
              <li className="flex items-center mt-2 text-[14px] justify-start">
                <GrCheckmark className="mr-4" /> Nostrud exercitation ullamco
                laboris{" "}
              </li>
              <li className="flex items-center mt-2 text-[14px] justify-start">
                <GrCheckmark className="mr-4" /> Nostrud exercitation ullamco
                laboris{" "}
              </li>
              <li className="flex items-center mt-2 text-[14px] justify-start">
                <GrCheckmark className="mr-4" /> Nostrud exercitation ullamco
                laboris{" "}
              </li>
              <li className="flex items-center mt-2 text-[14px] justify-start">
                <GrCheckmark className="mr-4" /> Nostrud exercitation ullamco
                laboris{" "}
              </li>
            </ul>
          </div>
          <div className="mission-contained-2"></div>
        </div>

        {/* planning */}
        <div className=" grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-7 ">
          <div>
            <img
              src="../images/mission/mission-5.png"
              alt="mission blog"
              className="w-full max-w-full"
            />

            <article className="px-7 mt-4">
              <h3 className="text-xl font-semibold py-2">
                Unique Mission Vissions
              </h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, qui officia
                deserunt mollit anim id est laborum.{" "}
              </p>
            </article>
          </div>

          <div>
            <img
              src="../images/mission/mission-6.png"
              alt="mission blog"
              className="w-full max-w-full"
            />

            <article className="px-7 mt-4">
              <h3 className="text-xl font-semibold py-2">
                Unique Mission Vissions
              </h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, qui officia
                deserunt mollit anim id est laborum.{" "}
              </p>
            </article>
          </div>

          <div>
            <img
              src="../images/mission/mission-7.png"
              alt="mission blog"
              className="w-full max-w-full"
            />

            <article className="px-7 mt-4">
              <h3 className="text-xl font-semibold py-2">
                Unique Mission Vissions
              </h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, qui officia
                deserunt mollit anim id est laborum.{" "}
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
