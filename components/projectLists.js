//importing components
import ProjectCard from "./projectCard";
import projectStyle from "../styles/project.module.css";

const ProjectLists = ({ datas }) => {
  console.log(datas);
  return <div className={projectStyle.projects}></div>;
};
// export const getStaticProps = async () => {
//   const res = await fetch("https://localhost:3000/api/projects");

//   const datas = await res.json();

//   return { props: { datas } };
// };

{
  /* <ProjectCard
          id={project.id}
          header={project.header}
          description={project.descirption}
          key={i}
          projectObj={project}
        /> */
}

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const datas = await res.json();

  console.log("inside props", datas);

  return {
    props: { datas },
  };
};

export default ProjectLists;
