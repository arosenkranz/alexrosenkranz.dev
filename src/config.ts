import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://alexrosenkranz.dev", // replace this with your deployed domain
  author: "Alex Rosenkranz",
  desc: "The personal website and blog of Alex Rosenkranz",
  title: "Alex Rosenkranz",
  ogImage: "alex-bio.jpeg",
  lightAndDarkMode: true,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/arosenkranz",
    linkTitle: `GitHub`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/alexrosenkranz",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/alexrosenkranz",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCRbSMOWF7L-IrYVrZ0qBRfw",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/user/alexrosenkranz",
    linkTitle: `${SITE.title} on Spotify`,
    active: true,
  },
];
