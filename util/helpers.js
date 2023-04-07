import { useSanityClient, groq } from "astro-sanity";
import { createImageBuilder } from "astro-sanity";

export function toggleClass(element, className) {
  element.classList.toggle(className);
}

export const imageBuilder = createImageBuilder(useSanityClient());

export function urlForImage(source) {
  return imageBuilder.image(source);
}
