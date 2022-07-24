import { Tracking } from "@/features/Tracking";
import Head from "next/head";
import styles from "@/styles/Home.module.css";

export function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Book Keeper</title>
        <meta name="description" content="Book keeper | Tracking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Tracking />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
