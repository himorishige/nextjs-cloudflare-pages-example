import { FC } from "react";
import styles from "../styles/Home.module.css";

const Home = async (): Promise<ReturnType<FC>> => {
  const uuid = await fetch("https://uuid.rocks/plain").then(
    async (response) => await response.text()
  );

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <p className={styles.description}>
          Here&apos;s a server-side UUID:
          <code className={styles.code}>{uuid}</code>
        </p>
      </main>
    </div>
  );
};

export default Home;
