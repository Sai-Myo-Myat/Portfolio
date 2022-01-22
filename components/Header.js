import { useEffect, useState } from "react";
import commonStyle from "../styles/common.module.css";

const Header = ({ title, title2 }) => {
  const [change, setChange] = useState(false);
  useEffect(() => {
    setChange(true);
  }, []);
  return (
    <div className={commonStyle.headerContainer}>
      <h1
        className={`${commonStyle.header}  ${
          change ? `${commonStyle.changesX}` : `${commonStyle.noChanges}`
        }`}
      >
        {title} <span className={commonStyle.span}> {title2}</span>
      </h1>
    </div>
  );
};

// ${
//     change ? `${commonStyle.changesX}` : `${commonStyle.noChanges}`
//   }

export default Header;
