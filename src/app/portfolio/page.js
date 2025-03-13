import HeroSection from "../components/fragments/HeroSection";
import GradientHeader from "../components/atoms/GradientHeader";

const Portfolio = function () {
  return (
    <div className="w-full mb-56">
      {/* Hero Section */}
      <section className="text-center mb-10">
        <HeroSection
          highlight=""
          title="Showcasing Our Digital Creations"
          description="A collection of projects showcasing our expertise in building innovative and effective digital solutions for businesses."
        />
      </section>

      {/* Project Section */}
      <section className="border border-white">
        <GradientHeader customClassname="text-xl pr-40">
          Project We've Worked On
        </GradientHeader>
        
      </section>
    </div>
  );
};

export default Portfolio;
