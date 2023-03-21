import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/N25FFHB/footer-bg.png')] bg-no-repeat bg-center bg-cover text-white pt-24">
      <div className="container mx-auto p-2">
        <div className=" md:flex block justify-between">
          <div className="">
            <img src="https://i.ibb.co/8xGX9vT/logo.png" alt="" />
          </div>
          {/* footer icon */}
          <div className=" flex gap-5 md:mt-0 mt-8 ">
            <Link
              to="/"
              className="bg-white text-black hover:text-white hover:bg-[#F94D1C] ease-in duration-300 p-5"
            >
              <FaFacebookF className=" text-2xl" />
            </Link>
            <Link
              to="/"
              className="bg-white text-black hover:text-white hover:bg-[#F94D1C] ease-in duration-300 p-5"
            >
              <FaTwitter className=" text-2xl" />
            </Link>
            <Link
              to="/"
              className="bg-white text-black hover:text-white hover:bg-[#F94D1C] ease-in duration-300 p-5"
            >
              <FaLinkedinIn className=" text-2xl" />
            </Link>
            <Link
              to="/"
              className="bg-white text-black hover:text-white hover:bg-[#F94D1C] ease-in duration-300 p-5"
            >
              <FaYoutube className=" text-2xl" />
            </Link>
          </div>
        </div>

        {/* grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-24">
          <div className="">
            <h2 className="mb-7 uppercase font-bold">Explore</h2>
            <p className="mb-7 text-[#878c8f]">About</p>
            <p className="mb-7 text-[#878c8f]">Our Team</p>
            <p className="mb-7 text-[#878c8f]">Gallery</p>
            <p className="mb-7 text-[#878c8f]">News & Blog</p>
          </div>

          <div className="">
            <h2 className="mb-7 uppercase font-bold">Resources</h2>
            <p className="mb-7 text-[#878c8f]">Become Partner</p>
            <p className="mb-7 text-[#878c8f]">Our Customer</p>
            <p className="mb-7 text-[#878c8f]">Working Process</p>
            <p className="mb-7 text-[#878c8f]">Manage Report</p>
            <p className="mb-7 text-[#878c8f]">Managed Website</p>
          </div>

          <div className="">
            <h2 className="mb-7 uppercase font-bold">You’ve question?</h2>
            <p className="text-[#F94D1C] mt-10">Get a Quote</p>
            <p className="mt-3 text-[#878c8f]">+12-987458741</p>
            <p className="text-[#F94D1C] mt-10">Send Email</p>
            <p className="mt-3 text-[#878c8f]">info@envato.com</p>
          </div>

          <div className="">
            <p className="text-[#878c8f]">
              Ut enim ad minim veniam, quis nostruexercitation ullamco laboris
              nisi ut aliquip ex ea consequat.Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </p>
            <div className="mt-9 flex">
              <input
                type="email"
                placeholder="Email address"
                className="input w-full p-5 rounded-none"
              />
              <div className="bg-[#F94D1C] p-4 cursor-pointer">
                <RxExit className="" />
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>

        {/* copyright */}

        <div className="text-[#878c8f] md:flex block justify-between py-7">
          <p>
            Copyright © 2022{" "}
            <Link to="/">
              <strong className="text-[#F94D1C]">Vinras</strong>
            </Link>{" "}
            All Rights Reserved.
          </p>
          <p className="md:mt-0 mt-5">Terms & Condition | Privacy | Support</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
