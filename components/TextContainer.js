import { useState, useEffect } from "react";
import commonStyle from "../styles/common.module.css";

const TextContainer = (props) => {
  const [change, setChange] = useState(false);
  useEffect(() => {
    setChange(true);
  }, []);
  return (
    <div
      className={`${commonStyle.textContainer} ${
        change ? `${commonStyle.changes}` : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default TextContainer;
