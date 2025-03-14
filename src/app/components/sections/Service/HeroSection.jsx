import IntroTitle from "../../fragments/IntroTitle";
import ButtonContactUs from "../../elements/ButtonContactUs";

const HeroSection = () => {
  return (
    <section className="text-center mb-10">
      <IntroTitle
        highlight="Step Up"
        title="is Empowering Your Digital Success"
        description="From web development to digital solutions, we create seamless experiences that drive growth and innovation for your business."
      />
      <div className="mt-4">
        <ButtonContactUs />
      </div>
    </section>
  );
};

export default HeroSection;
