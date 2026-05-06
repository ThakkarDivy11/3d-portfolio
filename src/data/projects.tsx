import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-3 my-3 mb-8">
      <Link href={live} target="_blank">
        <Button size="sm">
          Visit Website
          <ArrowUpRight className="ml-2 w-4 h-4" />
        </Button>
      </Link>

      {repo && (
        <Link href={repo} target="_blank">
          <Button size="sm">
            Github
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  next: { title: "Next.js", bg: "black", fg: "white", icon: <RiNextjsFill /> },
  node: { title: "Node.js", bg: "black", fg: "white", icon: <RiNodejsFill /> },
  react: { title: "React", bg: "black", fg: "white", icon: <RiReactjsFill /> },
  tailwind: { title: "Tailwind", bg: "black", fg: "white", icon: <SiTailwindcss /> },
  express: { title: "Express", bg: "black", fg: "white", icon: <SiExpress /> },
  mongo: { title: "MongoDB", bg: "black", fg: "white", icon: <SiMongodb /> },
  js: { title: "JavaScript", bg: "black", fg: "white", icon: <SiJavascript /> },
  ts: { title: "TypeScript", bg: "black", fg: "white", icon: <SiTypescript /> },
  chakra: { title: "Chakra UI", bg: "black", fg: "white", icon: <SiChakraui /> },
  prisma: { title: "Prisma", bg: "black", fg: "white", icon: <SiPrisma /> },
  postgres: { title: "PostgreSQL", bg: "black", fg: "white", icon: <SiPostgresql /> },
  framerMotion: { title: "Framer Motion", bg: "black", fg: "white", icon: <TbBrandFramerMotion /> },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "cabzee",
    category: "Ride Booking Platform",
    title: "Cabzee",
    src: "/assets/projects-screenshots/cabzee/hero.png",
    screenshots: ["hero.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo],
    },
    live: "https://cabzeeeee-main.vercel.app/",
    github: "https://github.com/ThakkarDivy11/cabzeeeee-main",
    content: (
      <div>
        <TypographyP className="text-2xl text-center font-mono">
          Smart cab booking with real-time tracking
        </TypographyP>
        <TypographyP className="font-mono">
          Cabzee is a MERN stack ride booking platform with AI chatbot,
          real-time tracking, and secure payments.
        </TypographyP>
        <ProjectsLinks live="https://cabzeeeee-main.vercel.app/" repo="https://github.com/ThakkarDivy11/cabzeeeee-main" />
        <SlideShow images={[`/assets/projects-screenshots/cabzee/rider.png`]} />
      </div>
    ),
  },

  {
    id: "couponluxury",
    category: "Coupon Platform",
    title: "Coupon Luxury",
    src: "/assets/projects-screenshots/couponluxury/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.chakra],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.prisma],
    },
    live: "https://www.couponluxury.com/",
    content: (
      <div>
        <TypographyP className="font-mono">
          Find best deals and discounts across multiple stores easily.
        </TypographyP>
        <ProjectsLinks live="https://www.couponluxury.com/" />
        <SlideShow images={[`${BASE_PATH}/couponluxury/landing.png`]} />
      </div>
    ),
  },

  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [],
    },
    live: "http://divythakkar.vercel.app",
    github: "https://github.com/divy-thakkar/Portfolio",
    content: (
      <div>
        <TypographyP className="font-mono">
          Personal portfolio with modern UI and animations.
        </TypographyP>
        <ProjectsLinks live="http://divythakkar.vercel.app" repo="https://github.com/divy-thakkar/Portfolio" />
        <SlideShow images={[`${BASE_PATH}/portfolio/landing.png`]} />
      </div>
    ),
  },
];

export default projects;