import { Children } from "react";

const FadedText = ( { children, from, to, classname } ) => {
  return (
    <>
      <span className={`bg-gradient-to-r ${from} ${to} bg-clip-text text-transparent ${classname}`}>
        {children}
      </span>
    </>
  );
};

export default FadedText;
