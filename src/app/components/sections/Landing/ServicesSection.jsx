"use client";

import React, { useState, useEffect } from "react";
import SectionTitle from "../../fragments/SectionTitle";
import SectionTitleDesc from "../../fragments/SectionTitleDesc";
import ServiceCard from "../../fragments/ServiceCard";
import services from "../../../../data/services.json";
import Link from "next/link";
import FadedText from "../../elements/FadedText";

const ServicesSection = () => {
  const [servicesData, setServicesData] = useState(services.services);

  useEffect(() => {
    console.log(servicesData);
  });
  return (
    <div className="w-full relative flex flex-col justify-center pt-10 bg-black">
      <SectionTitle title={"What We Do,"} />
      <SectionTitleDesc
        classname={"max-w-[195px] lg:max-w-96 mt-1"}
        content={
          "Crafting seamless and scalable digital solutions. See what we can do for you."
        }
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 mt-8 py-5">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            serviceSvg={service.serviceSvg}
            img1={service.img1}
            img2={service.img2}
            img3={service.img3}
          />
        ))}
      </div>
      <div className="flex justify-center pb-5">
        <Link href="/services">
          <FadedText
            from={"from-white"}
            to={"to-white/50"}
            classname={"text-xs md:text-4xl lg:text-5xl text-left inline-block"}
          >
            {"See More Services >"}
          </FadedText>
        </Link>
      </div>
    </div>
  );
};

export default ServicesSection;
