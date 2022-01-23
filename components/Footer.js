import Link from "next/link";
import FooterStyle from "../styles/Layout.module.css";

const Footer = () => {
  return (
    <footer className={FooterStyle.footer}>
      <div>
        <a
          target="blink"
          href="https://www.linkedin.com/in/saimyo-myat-862729229/"
        >
          <span className="fab">LinkedIn</span>
        </a>
      </div>

      <div>
        <a target="blink" href="https://github.com/Sai-Myo-Myat">
          <span className="fab">Github</span>
        </a>
      </div>
      <div className={FooterStyle.email}>
        <a>saimyomyat511@gmail.com</a>
      </div>
    </footer>
  );
};

export default Footer;
