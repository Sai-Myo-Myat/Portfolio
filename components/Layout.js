import Head from "next/head";
import styles from "../styles/Layout.module.css";
//importing components
import Nav from "./Nav";
import SideMenu from "./SideMenu";
import Footer from "./Footer";
import { Context } from "./Contex";
import { ContextTwo } from "./ContextTwo";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sai Myo Myat</title>

        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Context>
        <ContextTwo>
          <Nav />
          <SideMenu />
          {children}
          <Footer />
        </ContextTwo>
      </Context>
    </div>
  );
};

export default Layout;
