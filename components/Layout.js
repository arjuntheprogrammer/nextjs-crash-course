import Meta from "./Meta";
import { Nav } from "./Nav";
import styles from "../styles/Layout.module.css";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}{" "}
        </main>{" "}
      </div>
    </>
  );
};
