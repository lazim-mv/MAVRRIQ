import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "nnttw2dj",
  dataset: "production",
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: "2024-12-27",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
