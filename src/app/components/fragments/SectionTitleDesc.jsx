import React from "react";
import FadedText from "../elements/FadedText";

const SectionTitleDesc = ({ content, classname }) => {
  return (
    <p className={`${classname}`}>
      <FadedText
        from={"from-white"}
        to={"to-white/50"}
        classname={"text-xs md:text-md lg:text-lg text-left inline-block"}
      >
        {content}
      </FadedText>
    </p>
  );
};

export default SectionTitleDesc;
