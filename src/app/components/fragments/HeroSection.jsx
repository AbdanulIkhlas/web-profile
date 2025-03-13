const HeroSection = ({ title, highlight, description }) => {
  return (
    <section className="text-center text-white px-5">
      <h1 className="text-2xl bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent">
        <span className="text-yellow-500">{highlight}</span> {title}
      </h1>
      <p className="mt-4 text-xs leading-5 px-4 text-gray-300 max-w-2xl mx-auto ">
        {description}
      </p>
    </section>
  );
};

export default HeroSection;
