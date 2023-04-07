import { useSanityClient, groq } from "astro-sanity";

export async function getBlogPosts() {
  const query = groq`*[_type == "post"] | order(_createdAt desc)`;
  const posts = await useSanityClient().fetch(query);
  return posts;
}

export async function getLatestPosts() {
  const query = groq`*[_type == "post"] | order(_createdAt desc) [0..2]`;
  const posts = await useSanityClient().fetch(query);
  return posts;
}
