import React from "react";

const GradientHeader = ({children, customClassname}) => {
  return (
    <h1
      className={`bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent ${customClassname}`}
    >
      {children}
    </h1>
  );
};

export default GradientHeader;
