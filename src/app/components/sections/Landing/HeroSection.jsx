import React from "react";
import HeaderTitle from "../../fragments/HeaderTitle";
import TitleDescription from "../../elements/TitleDescription";
import Stats from "../../fragments/Stats";
import Splash from "../../elements/Splash";

const HeroSection = () => {
  return (
    <div className="w-full relative flex flex-col items-center justify-center">
      <HeaderTitle />
      <TitleDescription
        classname={`text-white text-center font-light max-w-40 md:max-w-none mt-4 md:mt-6 lg:mt-8`}
      >
        The Future of Technology, Designed for You.
      </TitleDescription>
      <Splash />
      <Stats classname={"mt-[140px] md:mt-[415px]"}/>
    </div>
  );
};

export default HeroSection;
