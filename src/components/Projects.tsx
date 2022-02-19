import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./_Projects.scss";

const ProjectSkill = ({ skill }: { skill: string }) => (
  <span className="project-skill">{skill}</span>
);

const ProjectSkills = ({ skills }: { skills: string[] }) => (
  <div className="project-skills">
    {skills.map((skill, index) => {
      return <ProjectSkill skill={skill} key={index} />;
    })}
  </div>
);

type ProjectsType = {
  title: string;
  description: string;
  skills: string[];
  image: string;
  links: Record<"github", string>;
};

const ProjectLinks = ({ links }: { links: Record<"github", string> }) => (
  <div className="project-links">
    {/* <a
          href={preview}
          rel="noopener"
          target="_blank"
          className="project-link"
        >
          Live Demo <FontAwesomeIcon icon="external-link-alt" />
        </a> */}
    <a
      href={links.github}
      target="_blank"
      rel="noreferrer"
      className="project-link secondary"
    >
      <FontAwesomeIcon icon={["fab", "github"]} /> View Source
    </a>
  </div>
);

const ProjectCard = (projects: ProjectsType) => (
  <div className="project-card">
    <img className="project-image" src={projects.image} alt="" />
    <div className="project-content">
      <h3>{projects.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: projects.description }} />
      <ProjectSkills skills={projects.skills} />
      <ProjectLinks links={projects.links} />
    </div>
  </div>
);

type Props = {
  projects: ProjectsType[];
};

const Projects = (props: Props) => (
  <div className="projects-container">
    {props.projects.map((proj) => (
      <ProjectCard
        title={proj.title}
        description={proj.description}
        skills={proj.skills}
        links={proj.links}
        image={proj.image}
        key={proj.title}
      />
    ))}
  </div>
);

export default Projects;
