import React from "react";

const ServiceCard = ({ serviceSvg, img1, img2, img3}) => {
  return (
    <div className="relative flex flex-col justify-between w-[152px] h-[183px] bg-[#ffffff]/5 rounded-xl">
      <div className="ps-4 pt-4">
        <img src={serviceSvg} alt="" />
      </div>
      <div className="relative ps-4 h-36 overflow-hidden">
        <div className="absolute flex w-[97px] top-14">
          <img src={img1} alt="" className="z-[10] w-max" />
        </div>
        <div className="absolute flex w-[97px] top-12 left-7">
          <img src={img2} alt="" className="z-[9] w-max" />
        </div>
        <div className="absolute flex w-[90px] top-10 left-11">
          <img src={img3} alt="" className="z-[8] w-max" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
