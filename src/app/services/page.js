import ButtonContactUs from "../components/elements/ButtonContactUs";
import DividerLine from "../components/elements/DividerLine";
import SecondHeader from "../components/elements/SecondHeader";
import SecondParagraph from "../components/elements/SecondParagraph";
import HeroSection from "../components/fragments/HeroSection";
import CardGrid from "../components/fragments/CardGrid";

const whyChooseUsItems = [
  "Free Consultation",
  "Including Domains (.com / .id)",
  "Innovative design & features",
  "Safe and Fast Hosting",
  "User Friendly & Responsive",
  "3 months website maintenance",
  "SEO Friendly",
  "6 month guarantee",
];

const Services = function () {
  return (
    <div className="w-full mb-56">
      {/* Hero Section */}
      <section className="text-center mb-10">
        <HeroSection
          highlight="Step Up"
          title="is Empowering Your Digital Success"
          description="From web development to digital solutions, we create seamless experiences that drive growth and innovation for your business."
        />
        <div className="mt-4">
          <ButtonContactUs />
        </div>
      </section>
      <DividerLine />

      {/* Why Choose Us Section */}
      <section className="mt-5">
        <SecondHeader>Why Choose Us</SecondHeader>
        <SecondParagraph customClassname="mt-2">
          We create digital experiences that are built to perform, scale, and
          inspire. Here’s why brands trust us
        </SecondParagraph>
        <div className="relative mt-8">
          <CardGrid items={whyChooseUsItems} />
        </div>
      </section>
      <DividerLine />

      {/* Client Project Status Section */}
      <section className="mt-6 border border-white">
        <SecondHeader>Client Project Status</SecondHeader>
        <SecondParagraph customClassname="mt-2">
          Get real-time insights into your project’s development phase. From
          wireframes to final deployment, we keep you informed every step of the
          way
        </SecondParagraph>
      </section>
    </div>
  );
};

export default Services;
