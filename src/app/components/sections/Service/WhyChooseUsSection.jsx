import SecondHeader from "../../elements/SecondHeader";
import SecondParagraph from "../../elements/SecondParagraph";
import CardGrid from "../../fragments/CardGrid";

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

const WhyChooseUsSection = () => {
  return (
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
  );
};

export default WhyChooseUsSection;
