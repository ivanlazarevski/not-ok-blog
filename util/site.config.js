export const siteConfig = {
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: "Ivan Lazarevski",
  // Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
  title: "Not OK Blog",
  // Meta property used as a default description meta property
  description:
    "Personal blog, containing rants about music and other entertainment.",
  // HTML lang property, found in src/layouts/Base.astro L:18
  lang: "en-GB",
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: "en_GB",
  // Sets the meta data theme-color, found in src/components/BaseHead.astro L:34. Toggling the dark mode will update the meta content with either light/dark color, implementation in src/layouts/Base.astro L:41.
  themeColorLight: "#fff8e7",
  themeColorDark: "#1e1e1e",
  // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
  date: {
    locale: "en-GB",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  },
};
