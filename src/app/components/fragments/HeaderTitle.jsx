import React from "react";
import FadedText from "../elements/FadedText";

const HeaderTitle = () => {
  return (
    <h1>
      <FadedText
        from="from-white"
        to="to-transparent"
        classname={`text-2xl md:text-4xl lg:text-5xl text-center relative inline-block max-w-xs md:max-w-[641px]`}
      >
        Building the Future of Technology with
          <FadedText from="from-primary/70" to="to-transparent">
            {" "}
            Step Up
          </FadedText>
      </FadedText>
    </h1>
  );
};

export default HeaderTitle;
