import { server } from "../config";
import commonStyle from "../styles/common.module.css";
//importing components
import Header from "../components/Header";
import ProjectLists from "../components/projectLists";

const Projects = ({ result }) => {
  return (
    <div className={commonStyle.container} id="projects">
      <div className={commonStyle.mainPage}>
        <Header title="My Projects" title2="" />
        <p>
          You can find more projects on my{" "}
          <a href="https://github.com/Sai-Myo-Myat">
            <span className={commonStyle.span}>Github </span>
          </a>
          account.
        </p>
        <ProjectLists datas={result} />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/projects`);

  return {
    props: {
      result: await res.json(),
    },
  };
};

export default Projects;
