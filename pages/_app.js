import "../styles/globals.css";
import Layout from "../components/Layout";
import commonStyle from "../styles/common.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
