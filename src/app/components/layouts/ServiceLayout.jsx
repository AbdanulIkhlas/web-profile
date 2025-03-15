import HeroSection from "../sections/Service/HeroSection";
import DividerLine from "../elements/DividerLine";
import WhyChooseUsSection from "../sections/Service/WhyChooseUsSection";
import ClientProjectStatusSection from "../sections/Service/ClientProjectStatusSection";
import Footer from "../fragments/Footer";

const ServiceLayout = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <DividerLine />
      <WhyChooseUsSection />
      <DividerLine />
      <ClientProjectStatusSection />
      <Footer />
    </div>
  );
};

export default ServiceLayout;
