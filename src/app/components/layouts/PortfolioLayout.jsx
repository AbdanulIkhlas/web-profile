import HeroSection from "../sections/Portfolio/HeroSection";
import ProjectSection from "../sections/Portfolio/ProjectSection";
import Footer from "../fragments/Footer";

const PortfolioLayout = () => {
  return <div className="w-full">
    <HeroSection />
    <ProjectSection />
    <Footer />
  </div>;
};

export default PortfolioLayout;
