import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import commonStyle from "../styles/common.module.css";
//importing components
import Header from "./Header";
import TextContainer from "./TextContainer";

const Home = () => {
  return (
    <div className={commonStyle.container}>
      <div className={commonStyle.mainPage}>
        <Header title="Welcome to " title2="my Portfolio" />
        <TextContainer>
          <p className={commonStyle.description}>
            This is my personal Portfolio. The reason why I made this is to show
            and practice my skills that I have been learning. And you can see
            more about this website (technologies I used) and me at{" "}
            <Link href="/about">
              <span className={commonStyle.span}>About </span>
            </Link>
            section. For my projects, check{" "}
            <Link href="/projects">
              <span className={commonStyle.span}>My Projects </span>
            </Link>
            out!. At the
            <Link href="/blogs">
              <span className={commonStyle.span}> Blogs </span>
            </Link>{" "}
            section , you will find my opinion on something. Have a Creative
            day.
          </p>
        </TextContainer>
      </div>
    </div>
  );
};

export default Home;
