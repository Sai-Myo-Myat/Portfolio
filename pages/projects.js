import commonStyle from "../styles/common.module.css";
//importing components
import Header from "../components/Header";
const Projects = () => {
  return (
    <div className={commonStyle.container}>
      <div className={commonStyle.mainPage}>
        <Header title="My Projects" title2="" />
        <p className={commonStyle.description}>
          You can find my projects on my{" "}
          <a href="https://github.com/Sai-Myo-Myat">
            <span className={commonStyle.span}>Github </span>
          </a>
          account. Later on, I'll show my live projects here.
        </p>
      </div>
    </div>
  );
};

export default Projects;
