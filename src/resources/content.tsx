import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Sarah",
  lastName: "Khan",
  name: "SarahKhanStyles",
  role: "Pakistani cultural clothing",
  avatar: "/images/avatar.jpg",
  email: "your-email@example.com",
  location: "America/Montreal",
  displayLocation: "Montreal",
  languages: [],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Updates from {person.name}</>,
  description: <>News and new arrivals</>,
};

/** Replace hrefs with your real profiles when ready. */
const social: Social = [
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "SarahKhanStyles — Pakistani cultural clothing",
  description:
    "SarahKhanStyles brings Pakistani cultural clothing with custom ordering and North American shipping.",
  headline: (
    <>
      🇵🇰 clothing, curated for you
    </>
  ),
  featured: {
    display: false,
    title: <>View the gallery</>,
    href: "/gallery",
  },
  subline: (
    <>
      SarahKhanStyles offers authentic styles and custom pieces sourced from Pakistan. Based in{" "}
      <Text as="span" size="xl" weight="strong">
        Montreal
      </Text>
      , serving customers across North America.
    </>
  ),
};

const about: About = {
  path: "/contact",
  label: "Contact",
  title: "Contact & location — SarahKhanStyles",
  description:
    "SarahKhanStyles is based in Montreal. Custom orders from Pakistan and shipping across North America.",
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "SarahKhanStyles",
    description: (
      <>
        I am based in Montreal and work with partners in Pakistan to source and produce custom cultural
        clothing. Shipping is available throughout North America.
      </>
    ),
  },
  work: {
    display: false,
    title: "Work Experience",
    experiences: [],
  },
  studies: {
    display: false,
    title: "Studies",
    institutions: [],
  },
  technical: {
    display: false,
    title: "Technical skills",
    skills: [],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "SarahKhanStyles",
  description: `Updates from ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `SarahKhanStyles`,
  description: `Lookbook and projects — ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: "Gallery — SarahKhanStyles",
  description: "A look at styles and pieces from SarahKhanStyles.",
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
