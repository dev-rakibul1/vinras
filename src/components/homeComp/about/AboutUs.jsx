import React from "react";
import { GrCaretNext, GrCheckmark } from "react-icons/gr";
import SectionTitleLeft from "../../share/sectionTitle/SectionTitleLeft";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section>
      <div className="about-wrapper mt-12">
        {/* about content */}
        <div className="about-content lg:flex items-center justify-between gap-7">
          <div className="w-full lg:max-w-[50%]">
            <div className="images-area relative">
              {/* shape */}
              <div className="about-shape-wrap">
                <img src="../images/img.png" alt="" className="max-w-full" />
                {/* <div className="about-shape"></div> */}
              </div>

              {/* badge */}
              <div className="about-badge">
                <div className="badge-child">
                  <p>Trusted by</p>
                  <h2>5820</h2>
                </div>
              </div>

              {/* media icon */}
              <div
                className="absolute top-1/4 right-1/2 "
                style={{ transform: "translate(-50%)" }}
              >
                <div className="about-media-play-wrap">
                  <div className="about-media-play"></div>
                </div>
                <div className="about-media-icon-wrap about-media-icon flex items-center justify-center">
                  <GrCaretNext className="about-icon" />
                </div>
              </div>
            </div>
          </div>
          <article className="about-article  w-full lg:max-w-[50%]">
            {/* section title */}
            <SectionTitleLeft
              title="About us"
              titleHeading="We are good at these areas to work"
            />

            {/* section content */}
            <div className="mt-7">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa mollit anim id est
                laborum. Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>

              <ul className="mt-7 flex justify-start items-start flex-col">
                <li className="flex justify-center items-start font-semibold">
                  <span className="mx-7">
                    <GrCheckmark />
                  </span>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris{" "}
                </li>
                <li className="flex justify-start items-center mt-4 font-semibold">
                  <span className="mx-7">
                    <GrCheckmark />
                  </span>{" "}
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu{" "}
                </li>
              </ul>

              {/* about progress */}
              <div className="circle-wrap flex items-center justify-start py-7">
                <div className="flex items-center justify-between">
                  <div
                    className="radial-progress"
                    style={{
                      "--value": "76",
                      "--size": "5rem",
                      "--thickness": "4px",
                    }}
                  >
                    76%
                  </div>
                  <p className="ml-7">Business consulting</p>
                </div>

                <div className="flex items-center justify-between ml-12">
                  <div
                    className="radial-progress"
                    style={{
                      "--value": "85",
                      "--size": "5rem",
                      "--thickness": "4px",
                    }}
                  >
                    85%
                  </div>
                  <p className="ml-7">Digital Consultancy</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
