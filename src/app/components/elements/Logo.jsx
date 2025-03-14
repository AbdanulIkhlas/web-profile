import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Image src="/images/logo/stepuplogo2.png" alt="Logo" width={21} height={21} className="w-[21px] h-[21px] md:w-[28px] md:h-[28px] lg:w-[37px] lg:h-[37px]" /> 
      <p className="text-white font-medium tracking-wide text-xs md:text-base lg:text-xl">Step Up</p>
    </div>
  );
};

export default Logo;
