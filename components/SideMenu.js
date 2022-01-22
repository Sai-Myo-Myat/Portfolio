import { useContext } from "react";
import sideMenu from "../styles/SideMenu.module.css";
//importing components
import SideMenuItem from "./SideMenuItem";
import { ContextProvider } from "./Contex";

const SideMenu = () => {
  const [menuOpen, setMenuOpen] = useContext(ContextProvider);
  const tabs = [
    { link: "/about", tab: "About" },
    { link: "/blogs", tab: "Blogs" },
    { link: "/projects", tab: "My Projects" },
  ];
  return (
    <div
      className={`${sideMenu.container} ${menuOpen ? `${sideMenu.slide}` : ""}`}
    >
      <div className={sideMenu.tabContainer}>
        {tabs.map((item) => (
          <SideMenuItem
            link={item.link}
            tab={item.tab}
            key={Math.random() * 100}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
