import Link from "next/link";
import { server } from "../../../config";
import commonStyle from "../../../styles/common.module.css";
const ShowProjects = ({ project }) => {
  return (
    <div className={commonStyle.container}>
      <div className={commonStyle.mainPage}>
        <h2 className={commonStyle.header}>{project.header}</h2>
        <p className={commonStyle.description2}>{project.description}</p>
        <div className={commonStyle.space}>
          <Link href={"/projects"} passHref>
            <span className={commonStyle.span}>go back</span>
          </Link>
          <a href={project.path} target="blink">
            <span className={commonStyle.span}>see project...</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/projects/${context.params.id}`);

  const project = await res.json();
  return {
    props: { project },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/projects`);
  const projects = await res.json();

  const ids = projects.map((project) => project.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default ShowProjects;
