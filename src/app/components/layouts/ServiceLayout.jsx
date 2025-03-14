import React from "react";
import IntroSection from "../sections/Service/IntroSection";
import DividerLine from "../elements/DividerLine";
import WhyChooseUsSection from "../sections/Service/WhyChooseUsSection";
import ClientProjectStatusSection from "../sections/Service/ClientProjectStatusSection";

const ServiceLayout = () => {
  return <div className="w-full mb-56">
    <IntroSection />
    <DividerLine />
    <WhyChooseUsSection />
    <DividerLine />
    <ClientProjectStatusSection />
  </div>;
};

export default ServiceLayout;
