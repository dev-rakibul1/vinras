import React from "react";
import { FaCheck } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { RxInstagramLogo, RxPlus, RxTwitterLogo } from "react-icons/rx";
import TopBanner from "../../components/share/topBanner/TopBanner";
import "./pages.css";

const TeamDetails = () => {
  return (
    <div>
      <div>
        <TopBanner routeName="Team details" path1="Home" path2="team details" />
      </div>

      <div className="vinras-container my-14">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
          <div className="">
            <div className="advisor-content">
              <div className="advisor-box overflow-hidden">
                <div className="advisor-single-items">
                  <img
                    src="../images/advistor/Layer-1.png"
                    className="advisor-image"
                    alt=""
                  />

                  {/* about */}
                  <div className="user-about">
                    <h4>John Doe</h4>
                    <h6>Senior Manager</h6>
                  </div>

                  {/* advisor social icon */}
                  <div className="advisor-social-icon">
                    <ul>
                      <li className="m-4 bg-orange-600 cursor-pointer p-2 text-black advisor-icon-1">
                        <span>
                          <RxPlus />
                        </span>
                      </li>
                      <li className="m-4 bg-orange-600 cursor-pointer p-2 text-black advisor-icon-2">
                        <span>
                          <RxInstagramLogo />
                        </span>
                      </li>
                      <li className="m-4 bg-orange-600 cursor-pointer p-2 text-black advisor-icon-3">
                        <span>
                          <RxTwitterLogo />
                        </span>
                      </li>
                      <li className="m-4 bg-orange-600 cursor-pointer p-2 text-black advisor-icon-4">
                        <span>
                          <GrFacebookOption />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="text-[50px] font-bold mb-5">Information</h2>
            <p className="text-[14px] mb-5">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
            </p>

            <div className="mb-5">
              <div className="flex items-center gap-4">
                <div className="bg-white text-[#F94D1C] shadow-xl w-10 h-10 rounded-full flex items-center justify-center">
                  <FaCheck />
                </div>
                <p className="text-[14px] text-[#878c8f]">
                  Ut enim ad minim veniam, quis nostrud exercitation ut aliquip
                </p>
              </div>
              <div className="flex items-center mt-5 gap-4">
                <div className="bg-white text-[#F94D1C] shadow-xl w-10 h-10 rounded-full flex items-center justify-center">
                  <FaCheck />
                </div>
                <p className="text-[14px] text-[#878c8f]">
                  Duis aute irure dolor in reprehenderit in voluptate eu fugiat
                  nulla
                </p>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              <h3 className="text-[18px] font-medium text-[#878c8f]">
                <b className="text-black">Phone : </b> 01879658725
              </h3>
              <h3 className="text-[18px] font-medium text-[#878c8f]">
                <b className="text-black">Website : </b> Webexample.com
              </h3>
              <h3 className="text-[18px] font-medium text-[#878c8f]">
                <b className="text-black">Email : </b> example@gmail.com
              </h3>
              <h3 className="text-[18px] font-medium text-[#878c8f]">
                <b className="text-black">Nationality : </b> American
              </h3>
              <h3 className="text-[18px] font-medium text-[#878c8f]">
                <b className="text-black">Gender : </b> Male
              </h3>
              <h3 className="text-[18px] font-medium text-[#878c8f]">
                <b className="text-black">Address : </b> Raselina, New York
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-[#f1f3f2] py-14">
        <div className="vinras-container">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-7 relative">
            <div className="">
              <h2 className="text-[48px] font-bold">How Can Help You</h2>
              <p className="text-[16px]">
                enatibus pulvinar hac lacinia interdum fermentum tortor leo a
                montes ridlus nisi mauris quis potenti habitant cum consequat
                varius est maecenas pretiun dignissim facilisi top level
                vehicula.
              </p>
              <div className="">
                <div className="flex items-center gap-5 mt-4">
                  <div className="">
                    <div className="bg-[#F94D1C] w-[70px] h-[70px] rounded-full flex items-center justify-center border-[8px] border-white shadow">
                      <img src="https://i.ibb.co/QdN3MBS/support.png" alt="" />
                    </div>
                  </div>
                  <div className="">
                    <h2 className="text-[22px] font-bold">Creative Solution</h2>
                    <p className="text-[16px] text-[#878c8f]">
                      Congue lacinia aenean venenatis arcu rutrum vitae sus pena
                      tibus lectus dapibus integer habitasses
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5 mt-4">
                  <div className="">
                    <div className="bg-[#F94D1C] w-[70px] h-[70px] rounded-full flex items-center justify-center border-[8px] border-white shadow">
                      <img src="/images/hand.png" alt="" />
                    </div>
                  </div>
                  <div className="">
                    <h2 className="text-[22px] font-bold">Creative Solution</h2>
                    <p className="text-[16px] text-[#878c8f]">
                      Congue lacinia aenean venenatis arcu rutrum vitae sus pena
                      tibus lectus dapibus integer habitasses
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5 mt-4">
                  <div className="">
                    <div className="bg-[#F94D1C] w-[70px] h-[70px] rounded-full flex items-center justify-center border-[8px] border-white shadow">
                      <img src="/images/iconW-28.png" alt="" />
                    </div>
                  </div>
                  <div className="">
                    <h2 className="text-[22px] font-bold">Creative Solution</h2>
                    <p className="text-[16px] text-[#878c8f]">
                      Congue lacinia aenean venenatis arcu rutrum vitae sus pena
                      tibus lectus dapibus integer habitasses
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:absolute w-full right-0">
              <div className="w-full">
                <img src="https://i.ibb.co/tQ4mmGj/team-details.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
