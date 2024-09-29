import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { FaDocker } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export const skills = [
  {
    name: "HTML",
    icon: FaHtml5,
    color: "#E34F26", // HTML5 official color
  },
  {
    name: "CSS",
    icon: IoLogoCss3,
    color: "#1572B6", // CSS3 official color
  },
  {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
    color: "#06B6D4", // Tailwind CSS official color
  },
  {
    name: "JavaScript",
    icon: IoLogoJavascript,
    color: "#F7DF1E", // JavaScript official color
  },
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB", // React official color
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032", // Git official color
  },
  {
    name: "TypeScript",
    icon: BiLogoTypescript,
    color: "#007ACC", // TypeScript official color
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "#764ABC", // Redux official color
  },
  {
    name: "Next.js",
    icon: RiNextjsFill,
    color: "#000000", // Next.js official color
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "#000000", // Express official color
  },
  {
    name: "Node",
    icon: IoLogoNodejs,
    color: "#339933", // Node.js official color
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248", // MongoDB official color
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "#2496ED", // Docker official color
  },
];

export const projects = [
  {
    name: "Taskify",
    description:
      "Taskify enhances productivity with Kanban boards, Notion-like pages, and Jira-inspired sprints. Organize tasks efficiently, assign to team members, and boost task completion and overall efficiency.",
    image:
      "https://res.cloudinary.com/bitway/image/upload/v1727449287/project%20images/hnwclpcdjbl1bhlzcybv.png",
    techStack: [
      "React",
      "TailwindCSS",
      "Next.js",
      "Firebase",
      "Blocknote",
      "Clerk",
    ],
    websiteLink: "https://taskify-arpit.vercel.app",
    githubLink: "https://github.com/DanteTerry/taskify",
    timeLine: "Jul 2024 - Sep 2024",
  },
  {
    name: "Talk",
    description:
      "Talk is a real-time communication app with instant messaging, voice, and video calls. Features include message translation, file sharing, online status, and typing effects for seamless interactions.",
    image:
      "https://res.cloudinary.com/bitway/image/upload/v1727449287/project%20images/kqkhcpy9bbyndphjml8l.png",
    techStack: [
      "React",
      "TailwindCSS",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Socket.io",
    ],
    websiteLink: "https://talk-arpit.vercel.app",
    githubLink: "https://github.com/DanteTerry/whatsapp_fe",
    timeLine: "May 2024 - Jul 2024",
  },
  {
    name: "SkyWatch",
    description:
      "SkyWatch provides a weather dashboard with real-time data and a 7-day forecast. Monitor weather in up to five cities, with accurate information from the OpenWeather API for effective planning.",
    image:
      "https://res.cloudinary.com/bitway/image/upload/v1727449288/project%20images/lwzskfrdm3ctm7o302if.png",
    techStack: ["React", "TailwindCSS", "Vite", "OpenWeather API"],
    websiteLink: "https://skywatch-v1.vercel.app",
    githubLink: "https://github.com/DanteTerry/skywatch",
    timeLine: "Mar 2024 - Mar 2024",
  },
  {
    name: "Taste-Trail",
    description:
      "Taste-Trail offers a sleek dashboard for food ordering. With robust search, filtering options, and secure payment integration, it simplifies discovering and ordering dishes efficiently and conveniently.",
    image:
      "https://res.cloudinary.com/bitway/image/upload/v1727449287/project%20images/syfru57wkj6wzemtj6mv.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "MongoDB",
      "Stripe",
      "TailwindCSS",
    ],
    websiteLink: "https://taste-trail-v2.vercel.app",
    githubLink: "https://github.com/DanteTerry/taste-trail-v2",
    timeLine: "Apr 2024 - May 2024",
  },

  {
    name: "Bitwise",
    description:
      "Bitwise simplifies property transactions with easy browsing, management, and sharing of listings. Whether buying or selling, streamline your real estate journey with user-friendly tools and features.",
    image:
      "https://res.cloudinary.com/bitway/image/upload/v1727640988/project%20images/versp2zexiojqf1c8opa.png",
    techStack: [
      "Next.js",
      "React",
      "MongoDB",
      "NextAuth",
      "Cloudinary",
      "TailwindCSS",
    ],
    websiteLink: "https://bitway.vercel.app/",
    githubLink: "https://github.com/DanteTerry/bitway",
    timeLine: "Feb 2024 - Mar 2024",
  },
];
