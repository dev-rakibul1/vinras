import React from "react";
import SectionTitleCenter from "../../share/sectionTitle/SectionTitleCenter";
import "./Services.css";

const Services = () => {
  const services = [
    {
      sName: "Business Planning",
      content:
        "Excepteur sint occaecat cupidatat paroident sunt in culpa qui officia deserunt mollianim id est laborum.",
    },

    {
      sName: "Manage Investment",
      content:
        "Excepteur sint occaecat cupidatat paroident sunt in culpa qui officia deserunt mollianim id est laborum.",
    },
    {
      sName: "Insurance Strategy",
      content:
        "Excepteur sint occaecat cupidatat paroident sunt in culpa qui officia deserunt mollianim id est laborum.",
    },

    {
      sName: "Audit Marketing",
      content:
        "Excepteur sint occaecat cupidatat paroident sunt in culpa qui officia deserunt mollianim id est laborum.",
    },

    {
      sName: "Digital Marketing",
      content:
        "Excepteur sint occaecat cupidatat paroident sunt in culpa qui officia deserunt mollianim id est laborum.",
    },

    {
      sName: "Web Developer",
      content:
        "Excepteur sint occaecat cupidatat paroident sunt in culpa qui officia deserunt mollianim id est laborum.",
    },
  ];

  return (
    <section className="service-wrapper py-12">
      {/* section title */}
      <SectionTitleCenter
        title="Our Service"
        titleHeading="Our Popular Service"
      />

      {/* section content */}
      <div className="mt-12 p-4 vinras-container">
        <div className="service-box grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 w-full md:max-w-[80%] mx-auto">
          {/* services box 01 */}
          {services.map((service) => (
            <div className=" bg-white service-single-box flex items-center justify-center flex-col relative p-4 m-4">
              <div className="service-item mt-12">
                <article className="service-article">
                  <h4 className="mb-2">{service.sName}</h4>
                  <p className="text-[13px]">{service.content}</p>
                </article>
              </div>

              {/* services icon */}
              <div className="absolute top-0 right-[30px] bg-[#F94D1C] py-2 px-4 rounded-md text-white">
                <span>icon</span>
              </div>

              {/* business text */}
              <div className="absolute top-[10%] left-0 bg-[#F94D1C] px-7 py-1 rounded-md text-white">
                <span>Business</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* service shape */}
      <div className="service-shape"></div>
    </section>
  );
};

export default Services;
