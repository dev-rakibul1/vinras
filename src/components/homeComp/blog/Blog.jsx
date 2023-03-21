import React from "react";
import {
  FaLongArrowAltRight,
  FaRegBookmark,
  FaRegComments,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionTitleCenter from "../../share/sectionTitle/SectionTitleCenter";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-wrapper">
      <div className=" w-full md:max-w-[80%] mx-auto">
        <div className=" my-24">
          <div className="my-4">
            <SectionTitleCenter
              title="Our Articles"
              titleHeading="Our Latest Blog Post"
            />
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:w-[85%] w-full mx-auto gap-10">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-full"
                  src="/images/blog/blog-1.png"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <div className="flex items-end justify-between mt-[-20%]">
                  <div className="flex items-center gap-2">
                    <FaRegBookmark className="text-[#F94D1C]" />{" "}
                    <p className="text-[#878c8f]">Admin</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRegComments className="text-[#F94D1C]" />{" "}
                    <p className="text-[#878c8f]">Comment</p>
                  </div>
                  <div className="bg-[#F94D1C] text-white rounded">
                    <h2 className="p-3 font-bold text-center">
                      20 <br /> May
                    </h2>
                  </div>
                </div>
                <h2 className="card-title text-[24px] font-bold mt-4">
                  You Business Advice For Growth
                </h2>
                <p className="my-5">
                  Lorem ipsum is simply is text used by copytyping refreshing.
                </p>
                <hr />
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <Link to="/">Read more</Link>
                  </div>
                  <FaLongArrowAltRight />
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-full"
                  src="/images/blog/blog-2.png"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <div className="flex items-end justify-between mt-[-20%]">
                  <div className="flex items-center gap-2">
                    <FaRegBookmark className="text-[#F94D1C]" />{" "}
                    <p className="text-[#878c8f]">Admin</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRegComments className="text-[#F94D1C]" />{" "}
                    <p className="text-[#878c8f]">Comment</p>
                  </div>
                  <div className="bg-[#F94D1C] text-white rounded">
                    <h2 className="p-3 font-bold text-center">
                      20 <br /> May
                    </h2>
                  </div>
                </div>
                <h2 className="card-title text-[24px] font-bold mt-4">
                  You Business Advice For Growth
                </h2>
                <p className="my-5">
                  Lorem ipsum is simply is text used by copytyping refreshing.
                </p>
                <hr />
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <Link to="/">Read more</Link>
                  </div>
                  <FaLongArrowAltRight />
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-full"
                  src="/images/blog/blog-3.png"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <div className="flex items-end justify-between mt-[-20%]">
                  <div className="flex items-center gap-2">
                    <FaRegBookmark className="text-[#F94D1C]" />{" "}
                    <p className="text-[#878c8f]">Admin</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRegComments className="text-[#F94D1C]" />{" "}
                    <p className="text-[#878c8f]">Comment</p>
                  </div>
                  <div className="bg-[#F94D1C] text-white rounded">
                    <h2 className="p-3 font-bold text-center">
                      20 <br /> May
                    </h2>
                  </div>
                </div>
                <h2 className="card-title text-[24px] font-bold mt-4">
                  You Business Advice For Growth
                </h2>
                <p className="my-5">
                  Lorem ipsum is simply is text used by copytyping refreshing.
                </p>
                <hr />
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <Link to="/">Read more</Link>
                  </div>
                  <FaLongArrowAltRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
