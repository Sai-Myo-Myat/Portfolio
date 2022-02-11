//importing components
import ProjectCard from "./projectCard";
import projectStyle from "../styles/project.module.css";

const ProjectLists = ({ datas }) => {
  return (
    <div className={projectStyle.projects}>
      {datas.map((project, i) => (
        <ProjectCard
          id={project.id}
          header={project.header}
          description={project.descirption}
          key={i}
          projectObj={project}
        />
      ))}
    </div>
  );
};

export default ProjectLists;
