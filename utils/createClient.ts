import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "iblab",
  apiKey: "0b0927f153f6477db78828cb111b5edbf107",
  customFetch: fetch.bind(globalThis),
});
