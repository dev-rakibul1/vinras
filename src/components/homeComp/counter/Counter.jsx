import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="counter-wrapper bg-[#F94D1C] py-12">
      <div className="vinras-container">
        <div className="counter-content grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
          <div className="counter-box bg-white p-4 m-4  flex items-center justify-center flex-col rounded-md">
            <div className="counter-item  flex items-center justify-center flex-col">
              <img src="../images/counter/count-1.png" alt="" />
              <h4 className="font-semibold py-2">Complete project</h4>
              <h1 className="font-bold text-3xl text-[#F94D1C]">
                <CountUp end={5684} enableScrollSpy />
              </h1>
            </div>
          </div>

          <div className="counter-box bg-white p-4 m-4  flex items-center justify-center flex-col rounded-md">
            <div className="counter-item flex items-center justify-center flex-col">
              <img src="../images/counter/count-2.png" alt="" />
              <h4 className="font-semibold py-2">Total download</h4>
              <h1 className="font-bold text-3xl text-[#F94D1C]">
                <CountUp end={5593} enableScrollSpy />
              </h1>
            </div>
          </div>

          <div className="counter-box bg-white p-4 m-4  flex items-center justify-center flex-col rounded-md">
            <div className="counter-item flex items-center justify-center flex-col">
              <img src="../images/counter/count-3.png" alt="" />
              <h4 className="font-semibold py-2">Positive review</h4>
              <h1 className="font-bold text-3xl text-[#F94D1C]">
                <CountUp end={5487} enableScrollSpy />
              </h1>
            </div>
          </div>

          <div className="counter-box bg-white p-4 m-4  flex items-center justify-center flex-col rounded-md">
            <div className="counter-item flex items-center justify-center flex-col">
              <img src="../images/counter/count-4.png" alt="" />
              <h4 className="font-semibold py-2">Complete project</h4>
              <h1 className="font-bold text-3xl text-[#F94D1C]">
                <CountUp end={2474} enableScrollSpy />
              </h1>
            </div>
          </div>

          <div className="counter-box bg-white p-4 m-4  flex items-center justify-center flex-col rounded-md">
            <div className="counter-item flex items-center justify-center flex-col">
              <img src="../images/counter/count-5.png" alt="" />
              <h4 className="font-semibold py-2">Cup Of Coffee</h4>
              <h1 className="font-bold text-3xl text-[#F94D1C]">
                <CountUp end={6497} enableScrollSpy />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
