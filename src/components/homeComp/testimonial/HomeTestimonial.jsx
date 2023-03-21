import React from "react";
import SectionTitleCenter from "../../share/sectionTitle/SectionTitleCenter";

const HomeTestimonial = () => {
  return (
    <div className="py-12 md:max-w-[90%] mx-auto">
      <div className="my-12">
        <SectionTitleCenter
          title="Testimonial"
          titleHeading="Our sweet client say"
        />

        {/* section content */}
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7">
          <article className="flex flex-item-center justify-center flex-col text-center">
            <img
              src="../images/blog/user-1.png"
              alt="user"
              className="max-w-[50%] mx-auto"
            />
            <p>
              Lacus senectus dictumst cursus fringilla diam justo do placerat
              luctus socis interdum vehicula justo tincidunt malesuada habitant
              aenean sit pharetra proin posuere has orci molestie magna
            </p>
            <h6 className="mt-4">
              <strong>Daren Mackwel</strong> - CEO, Apple
            </h6>
          </article>

          <article className="flex flex-item-center justify-center flex-col text-center">
            <img
              src="../images/blog/user-3.png"
              alt="user"
              className="max-w-[50%] mx-auto"
            />
            <p>
              Lacus senectus dictumst cursus fringilla diam justo do placerat
              luctus socis interdum vehicula justo tincidunt malesuada habitant
              aenean sit pharetra proin posuere has orci molestie magna
            </p>
            <h6 className="mt-4">
              <strong>Daren Mackwel</strong> - CEO, Apple
            </h6>
          </article>

          <article className="flex flex-item-center justify-center flex-col text-center">
            <img
              src="../images/blog/user-2.png"
              alt="user"
              className="max-w-[50%] mx-auto"
            />
            <p>
              Lacus senectus dictumst cursus fringilla diam justo do placerat
              luctus socis interdum vehicula justo tincidunt malesuada habitant
              aenean sit pharetra proin posuere has orci molestie magna
            </p>
            <h6 className="mt-4">
              <strong>Daren Mackwel</strong> - CEO, Apple
            </h6>
          </article>

          <article className="flex flex-item-center justify-center flex-col text-center">
            <img
              src="../images/blog/user-3.png"
              alt="user"
              className="max-w-[50%] mx-auto"
            />
            <p>
              Lacus senectus dictumst cursus fringilla diam justo do placerat
              luctus socis interdum vehicula justo tincidunt malesuada habitant
              aenean sit pharetra proin posuere has orci molestie magna
            </p>
            <h6 className="mt-4">
              <strong>Daren Mackwel</strong> - CEO, Apple
            </h6>
          </article>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonial;
