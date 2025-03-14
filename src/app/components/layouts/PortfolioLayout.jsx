import HeroSection from "../sections/Portfolio/HeroSection";
import ProjectSection from "../sections/Portfolio/ProjectSection";

const PortfolioLayout = () => {
  return <div className="w-full mb-56">
    <HeroSection />
    <ProjectSection />
  </div>;
};

export default PortfolioLayout;
