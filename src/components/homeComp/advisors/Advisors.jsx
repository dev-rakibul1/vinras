import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { RxInstagramLogo, RxPlus, RxTwitterLogo } from "react-icons/rx";
import SectionTitleCenter from "../../share/sectionTitle/SectionTitleCenter";
import "./Advisors.css";

const Advisors = () => {
  return (
    <div className="my-12">
      {/* section title */}
      <div className="my-7">
        <SectionTitleCenter
          title="Meet our advisor"
          titleHeading="Our Professional Consultants"
        />
      </div>

      {/* advisor content */}
      <div className="advisor-content grid gap-7 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {/* advisor 01 */}
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

        {/* advisor 01 */}
        <div className="advisor-box overflow-hidden">
          <div className="advisor-single-items">
            <img
              src="../images/advistor/Layer-2.png"
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

        {/* advisor 01 */}
        <div className="advisor-box overflow-hidden">
          <div className="advisor-single-items">
            <img
              src="../images/advistor/Layer-3.png"
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

        {/* advisor 01 */}
        <div className="advisor-box overflow-hidden">
          <div className="advisor-single-items">
            <img
              src="../images/advistor/Layer-4.png"
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
  );
};

export default Advisors;
