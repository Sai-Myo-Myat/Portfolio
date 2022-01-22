import commonStyle from "../styles/common.module.css";
//importing components
import Header from "../components/Header";

const Blogs = () => {
  return (
    <div className={commonStyle.container}>
      <div className={commonStyle.mainPage}>
        <Header title2="" title="Blogs" />
      </div>
    </div>
  );
};

export default Blogs;
