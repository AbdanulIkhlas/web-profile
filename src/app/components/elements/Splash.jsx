import React from "react";
import Image from "next/image";
const Splash = () => {
  return (
    <div className="absolute top-[120px] -z-20">
      <Image
        src="/images/splash-1.png"
        alt="Logo"
        width={270}
        height={210}
        className="md w-[724px]"
      ></Image>
    </div>
  );
};

export default Splash;
