import { FC } from "react";
import styles from "../styles/Home.module.css";
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: "your-service-domain",
  apiKey: "your-api-key",
  customFetch: fetch.bind(globalThis),
});

async function getData() {
  const data = await client.get({
    endpoint: "blog",
  });
  return data.contents;
}

const Home = async (): Promise<ReturnType<FC>> => {
  const uuid = await fetch("https://uuid.rocks/plain").then(
    async (response) => await response.text()
  );

  const data = await getData();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div>
          {data.map((item: any) => {
            return (
              <div key={item.id}>
                <h1>{item.title}</h1>
              </div>
            );
          })}
        </div>

        <p className={styles.description}>
          Here&apos;s a server-side UUID:
          <code className={styles.code}>{uuid}</code>
        </p>
      </main>
    </div>
  );
};

export default Home;
