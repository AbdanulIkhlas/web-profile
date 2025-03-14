import SecondHeader from "../../elements/SecondHeader";
import SecondParagraph from "../../elements/SecondParagraph";

const ClientProjectStatusSection = () => {
  return (
    <section className="mt-6 border border-white">
      <SecondHeader>Client Project Status</SecondHeader>
      <SecondParagraph customClassname="mt-2">
        Get real-time insights into your project’s development phase. From
        wireframes to final deployment, we keep you informed every step of the
        way
      </SecondParagraph>
    </section>
  );
};

export default ClientProjectStatusSection;
