import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <Link href={`/portfolio/${project.id}`} passHref>
      <div className="relative group cursor-pointer rounded-md overflow-hidden">
        {/* Gambar Project */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto"
        />

        {/* Overlay Hover */}
        <div
          className="absolute bottom-0 left-0 w-full h-0 group-hover:h-4/5 transition-all duration-500"
          style={{
            background: `linear-gradient(to top, ${project.hoverColor}, transparent)`,
          }}
        ></div>

        {/* Title */}
        <div className="absolute bottom-0 left-0 flex items-center gap-2 w-full p-3 text-white text-left text-xs font-medium transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <p>{project.title}</p>
          <img src="/svg/arrow-right.svg" alt="arrow right" />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
