import commonStyle from "../styles/common.module.css";
//importing components
import Header from "../components/Header";

const Blogs = () => {
  return (
    <div className={commonStyle.container}>
      <div className={commonStyle.mainPage}>
        <Header title2="" title="Blogs" />
        <p className={commonStyle.description}>Currently, there is no Blog.</p>
      </div>
    </div>
  );
};

export default Blogs;
