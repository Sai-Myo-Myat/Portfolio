import { useContext } from "react";
import Menustyles from "../styles/Menu.module.css";
//importing components
import { ContextProvider } from "./Contex";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useContext(ContextProvider);
  return (
    <div
      className={`${Menustyles.menu} ${menuOpen ? `${Menustyles.open}` : ""}`}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <div className={Menustyles.line}></div>
      <div className={Menustyles.line}></div>
      <div className={Menustyles.line}></div>
    </div>
  );
};

export default Menu;
