import React from "react";
import FadedText from "../elements/FadedText";

const SectionTitle = ({ title }) => {
  return (
    <h3>
      <FadedText
        from={"from-white"}
        to={"to-white/20"}
        classname={"text-xl md:text-3xl lg:text-4xl text-left"}
      >
        {title}
      </FadedText>
    </h3>
  );
};

export default SectionTitle;
