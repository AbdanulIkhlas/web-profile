import React from "react";

const SecondParagraph = ({children, customClassname}) => {
  return <p className={`text-xs text-paragraphColor ${customClassname}`}>{children}</p>;
};

export default SecondParagraph;
