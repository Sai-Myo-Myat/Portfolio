import commonStyle from "../styles/common.module.css";
//importing components
import Header from "../components/Header";

const Projects = ({}) => {
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
      </div>
    </div>
  );
};

export default Projects;
