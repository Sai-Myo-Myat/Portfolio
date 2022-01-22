import commonStyle from "../styles/common.module.css";
//importing components
import Header from "../components/Header";
const Projects = () => {
  return (
    <div className={commonStyle.container}>
      <div className={commonStyle.mainPage}>
        <Header title="My Projects" title2="" />
      </div>
    </div>
  );
};

export default Projects;
