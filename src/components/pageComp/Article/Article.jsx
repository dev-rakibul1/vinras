import React from "react";
import SectionTitleCenter from "../../share/sectionTitle/SectionTitleCenter";

const Article = () => {
  return (
    <div className="vinras-container mx-auto my-24 pb-24">
      <div className="my-7">
        <SectionTitleCenter
          title="Our article"
          titleHeading="Our latest blog post"
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
        {/* https://i.ibb.co/k9s5TnJ/user-2.png https://i.ibb.co/fqCx74g/3.png */}
        {/* blog 01 */}
        <div className="relative">
          <div className="">
            <img
              className="w-full"
              src="https://i.ibb.co/fqCx74g/3.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="mx-2 bg-[#f3f3f4] rounded-[20px] absolute left-0 bottom-[-45%] p-4 z-10">
            <div className="flex items-end">
              <div className="absolute left-5 top-[-30%] flex items-end gap-2">
                <img
                  className="mb-[-5px]"
                  src="https://i.ibb.co/P6YdTkm/user-3.png"
                  alt=""
                  style={{ zIndex: "1" }}
                />
                <div className="flex items-center gap-5">
                  <div
                    className="bg-[#F94D1C] pl-9 pr-5 py-3 ml-[-40px] mt-[-40px]"
                    style={{ zIndex: "-1" }}
                  >
                    <p className="text-[12px] text-white">12 May 21</p>
                  </div>
                  <div className="mt-[-35px]">
                    <p className="text-[12px]">
                      Posted : <span className="text-[#F94D1C]">karin</span> - 8
                      Comments
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7">
              <h3 className="text-[22px] font-semibold my-6">
                Basic Rules Of Running Web Agency Business
              </h3>
              <p>
                Excepteur sint occaecat cupidatat non proident in culpa qofficia
                mollianim
              </p>
            </div>
          </div>
        </div>

        {/* blog 02 */}
        <div className="relative">
          <div className="">
            <img
              className="w-full"
              src="../images/blog/blog-2.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="mx-2 bg-[#f3f3f4] rounded-[20px] absolute left-0 bottom-[-45%] p-4 z-10">
            <div className="flex items-end">
              <div className="absolute left-5 top-[-30%] flex items-end gap-2">
                <img
                  className="mb-[-5px]"
                  src="https://i.ibb.co/k9s5TnJ/user-2.png"
                  alt=""
                  style={{ zIndex: "1" }}
                />
                <div className="flex items-center gap-5">
                  <div
                    className="bg-[#F94D1C] pl-9 pr-5 py-3 ml-[-40px] mt-[-40px]"
                    style={{ zIndex: "-1" }}
                  >
                    <p className="text-[12px] text-white">12 May 21</p>
                  </div>
                  <div className="mt-[-35px]">
                    <p className="text-[12px]">
                      Posted : <span className="text-[#F94D1C]">karin</span> - 8
                      Comments
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7">
              <h3 className="text-[22px] font-semibold my-6">
                Basic Rules Of Running Web Agency Business
              </h3>
              <p>
                Excepteur sint occaecat cupidatat non proident in culpa qofficia
                mollianim
              </p>
            </div>
          </div>
        </div>

        {/* blog 03 */}
        <div className="relative">
          <div className="">
            <img
              className="w-full"
              src="../images/blog/blog-1.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="mx-2 bg-[#f3f3f4] rounded-[20px] absolute left-0 bottom-[-45%] p-4 z-10">
            <div className="flex items-end">
              <div className="absolute left-5 top-[-30%] flex items-end gap-2">
                <img
                  className="mb-[-5px]"
                  src="../images/blog/user-1.png"
                  alt=""
                  style={{ zIndex: "1" }}
                />
                <div className="flex items-center gap-5">
                  <div
                    className="bg-[#F94D1C] pl-9 pr-5 py-3 ml-[-40px] mt-[-40px]"
                    style={{ zIndex: "-1" }}
                  >
                    <p className="text-[12px] text-white">12 May 21</p>
                  </div>
                  <div className="mt-[-35px]">
                    <p className="text-[12px]">
                      Posted : <span className="text-[#F94D1C]">karin</span> - 8
                      Comments
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7">
              <h3 className="text-[22px] font-semibold my-6">
                Basic Rules Of Running Web Agency Business
              </h3>
              <p>
                Excepteur sint occaecat cupidatat non proident in culpa qofficia
                mollianim
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
