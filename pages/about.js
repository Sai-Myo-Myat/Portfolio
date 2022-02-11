import commonStyle from "../styles/common.module.css";
//importing components
import Header from "../components/Header";
import TextContainer from "../components/TextContainer";

const About = () => {
  return (
    <div className={commonStyle.container} id="about">
      <div className={commonStyle.mainPage}>
        <Header title="About" title2="" />
        <TextContainer>
          <div className={commonStyle.description}>
            <h3>
              <span className={commonStyle.span}>About Me</span>
            </h3>
            Hi Guys! I am Sai Myo Myat , a student from Technology University
            (Banmaw). I love web development and I want my career to be a web
            developer.
          </div>
        </TextContainer>
        <TextContainer>
          <h3>
            <span className={commonStyle.span}>About Website</span>
          </h3>
          <div className={commonStyle.description}>
            <p>
              This Portfolio Website is builded on Next.js framework. For
              Styling, I do not use any framework. I just used css-module. I am
              also thinking to use Tailwind CSS or something like that, may be
              later.
            </p>
            <p>
              The main purpose is to show my projects and to share my opinions
              on web development. And there is one last purpose , that is to get
              a web developer job.
            </p>
            <p>
              By building this website , I have learnt how to use Next.js
              practically. And how to write codes to be clear, not to be
              duplicate a lot and reuseable.
            </p>
          </div>
        </TextContainer>
      </div>
    </div>
  );
};

export default About;
