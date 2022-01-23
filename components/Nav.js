import { useContext, useEffect, useState } from "react";
import navStyles from "../styles/Nav.module.css";
import Link from "next/link";
//importing components
import Menu from "./Menu";
import { ContextProvider } from "./Contex";
import { ContextProviderTwo } from "./ContextTwo";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useContext(ContextProvider);
  const [yes, setYes] = useContext(ContextProviderTwo);
  setTimeout(() => {
    setYes(false);
  }, 200);
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.logoContainer}>
        <Link href="/" passHref>
          <h2
            className={`${navStyles.logo1} ${yes ? `${navStyles.logo}` : ""}`}
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <div className={navStyles.name}>Sai </div>
            <div className={navStyles.name}>Myo </div>
            <div className={navStyles.name}>Myat</div>
          </h2>
        </Link>
      </div>

      <ul className={navStyles.tabs}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/projects">My Projects</Link>
        </li>
      </ul>
      <div>
        <Menu />
      </div>
    </nav>
  );
};

export default Nav;
