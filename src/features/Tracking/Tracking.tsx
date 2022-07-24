import { Nav } from "components/Nav";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import { NavActions, NavDetail, NavUser } from "./components";

export default function Tracking() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Book Keeper</title>
        <meta name="description" content="Book keeper | Tracking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav>
          <NavUser></NavUser>
          <NavDetail></NavDetail>
          <NavActions></NavActions>
        </Nav>
        {/* Book Keeper Component*/}
        {/* Registered Bools */}
        {/* Registered Bools */}
        {/* Read Books */}
        {/* Read Books */}
        {/* Book Keeper Component*/}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
