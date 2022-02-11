import projectStyle from "../styles/project.module.css";
import commonStyle from "../styles/common.module.css";
import Link from "next/link";

const ProjectCard = ({ id, header }) => {
  return (
    <div className={projectStyle.project}>
      <Link href={`/projects/${id}`}>
        <h4>{header}</h4>
      </Link>
    </div>
  );
};
export default ProjectCard;
