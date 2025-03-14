import React from "react";

const SecondHeader = ({children, customClassname}) => {
  return (
    <h2 className={`text-base text-white ${customClassname}`}>{children}</h2>
  );
};

export default SecondHeader;
