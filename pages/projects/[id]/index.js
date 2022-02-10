import commonStyle from "../../../styles/common.module.css";
const ShowProjects = () => {
  return (
    <div className={commonStyle.container}>
      <div className={commonStyle.mainPage}>
        <h2 className={commonStyle.header}>ToDOList</h2>
        <p className={commonStyle.description2}>
          "May be this is not useful for real because of the design . But I make
          this booking app to practice my thinking in Javascript with date
          object. In this web app, - you can't create two same booking. -
          youhave to cancel a booking one minute in advance ( that should be one
          day ) and more..."
        </p>
        <a href="https://sai-myo-myat.github.io/bookingApp/" target="blink">
          <span className={commonStyle.span}>see project...</span>
        </a>
      </div>
    </div>
  );
};

export default ShowProjects;
