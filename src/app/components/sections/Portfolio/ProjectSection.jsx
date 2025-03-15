import GradientHeader from "../../elements/GradientHeader";
import SecondParagraph from "../../elements/SecondParagraph";
import ProjectCard from "../../fragments/ProjectCard";
import projects from "@/data/projects";

const ProjectSection = () => {
  return (
    <section className="">
      <div className="pr-40">
        <GradientHeader customClassname="text-xl">
          Project We've Worked On
        </GradientHeader>
      </div>
      <SecondParagraph customClassname="mt-3 pe-32 mb-6">
        Explore the websites and digital solutions we've built, tailored for
        performance, aesthetics, and user experience.
      </SecondParagraph>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
