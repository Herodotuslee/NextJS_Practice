import Head from "next/head";
import styles from "@/styles/Layout.module.css";
import Header from "./Header";
import Showcase from "./Showcase";
import Footer from "./Footer";
export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header></Header>
      <Showcase/>
      <div className={styles.container}>{children}</div>
      <Footer></Footer>
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ Events",
  description: "Find blah blah blah",
  keywords: "keyword~~~~~",
};
