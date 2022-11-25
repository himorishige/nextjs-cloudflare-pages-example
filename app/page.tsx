import { createClient } from "microcms-js-sdk";

// revalidate = 0で従来のgetServerSidePropsと同じような動作、SSRに
// revalidate = 1以上の数値を渡すことで従来のISRとして動作する
// revalidateなしの場合は従来のgetStaticPropsと同じような動作、SSGとして
export const revalidate = 0;

const client = createClient({
  serviceDomain: "iblab",
  apiKey: "0b0927f153f6477db78828cb111b5edbf107",
});

async function getData() {
  const data = await client.get({
    endpoint: "blog",
  });
  return data.contents;
}

export default async function Home() {
  const data = await getData();
  return (
    <div>
      {data.map((item: any) => {
        return (
          <div key={item.id}>
            <h1>{item.title}</h1>
          </div>
        );
      })}
    </div>
  );
}
