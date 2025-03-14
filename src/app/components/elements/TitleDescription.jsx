import React from "react";

const TitleDescription = ({ children, classname }) => {
  return (
    <>
      <p className={`text-xs md:text-lg ${classname}`}>
        {children}
      </p>
    </>
  );
};

export default TitleDescription;
