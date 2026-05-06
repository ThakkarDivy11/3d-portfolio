const config = {
  title: "Divy Thakkar | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Divy, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Divy, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Divy",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Divy Thakkar",
  email: "divythakkar318@gmail.com",
  site: "https://divythakkar.site",

  // for github stars button
  githubUsername: "ThakkarDivy11",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/divythakkar",
    linkedin: "https://www.linkedin.com/in/divy-thakkar-a89859227/",
    instagram: "https://www.instagram.com/divyythakkar_3108",
    facebook: "https://www.facebook.com/DivyThakkar/",
    github: "https://github.com/ThakkarDivy11",
  },
};
export { config };
