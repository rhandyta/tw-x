import Profile from "@/public/assets/images/profile.jpg";
import Covid from "@/public/assets/images/covid.jpg";
import Note from "@/public/assets/images/note.jpg";
import Rental from "@/public/assets/images/penyewaan.jpg";

import DescriptionIcon from "@mui/icons-material/Description";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver"; //komunikasi
import SyncProblemIcon from "@mui/icons-material/SyncProblem"; //problem solving
import PsychologyIcon from "@mui/icons-material/Psychology"; //logical thinking
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates"; //creavity
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom"; //time management
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement"; //adability
import ReduceCapacityIcon from "@mui/icons-material/ReduceCapacity"; // collaboration skills
import Diversity3Icon from "@mui/icons-material/Diversity3"; // professional ethics

import Html from "@/public/assets/images/icons/html5.svg";
import Css from "@/public/assets/images/icons/css3.svg";
import Bootstrap from "@/public/assets/images/icons/bootstrap.svg";
import Tailwindcss from "@/public/assets/images/icons/tailwindcss.svg";
import Javascript from "@/public/assets/images/icons/javascript.svg";
import Express from "@/public/assets/images/icons/express.svg";
import Laravel from "@/public/assets/images/icons/laravel.svg";
import Mui from "@/public/assets/images/icons/mui.svg";
import Mysql from "@/public/assets/images/icons/mysql.svg";
import Nestjs from "@/public/assets/images/icons/nestjs.svg";
import Nextjs from "@/public/assets/images/icons/nextdotjs.svg";
import Nodejs from "@/public/assets/images/icons/nodedotjs.svg";
import React from "@/public/assets/images/icons/react.svg";
import Php from "@/public/assets/images/icons/php.svg";

export const linkNavigation = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Work",
    link: "work",
  },
  {
    title: "Blog",
    link: "blogs",
  },
  {
    title: "About",
    link: "about",
  },
  {
    title: "Contact",
    link: "contact",
  },
];

export const profile = {
  name: "photo profile",
  src: Profile,
};

export const linkExternal = [
  {
    name: "resume rhandyta briantama",
    link: "https://registry.jsonresume.org/rhandyta",
    icon: DescriptionIcon,
  },
  {
    name: "linkedin rhandyta briantama",
    link: "https://www.linkedin.com/in/rhandyta-briantama-806268229/",
    icon: LinkedInIcon,
  },
  {
    name: "github rhandyta briantama",
    link: "https://www.github.com/rhandyta",
    icon: GitHubIcon,
  },
];

export const softSkills = [
  {
    name: "Communication Skills",
    icon: RecordVoiceOverIcon,
  },
  {
    name: "Problem-Solving Skills",
    icon: SyncProblemIcon,
  },
  {
    name: "Logical Thinking",
    icon: PsychologyIcon,
  },
  {
    name: "Creativity",
    icon: TipsAndUpdatesIcon,
  },
  {
    name: "Time Management",
    icon: HourglassBottomIcon,
  },
  {
    name: "Adaptability",
    icon: SelfImprovementIcon,
  },
  {
    name: "Collaboration Skills",
    icon: ReduceCapacityIcon,
  },
  {
    name: "Professional Ethics",
    icon: Diversity3Icon,
  },
];

export const projects = [
  {
    category: "healthy",
    title: "Covid-19",
    src: Covid,
  },
  {
    category: "daily life",
    title: "Note App",
    src: Note,
  },
  {
    category: "service",
    title: "Rental",
    src: Rental,
  },
];
export const blogs = [
  {
    title: "Hi First Post",
    category: "Design",
    src: Covid,
    created_at: "3 min ago",
  },
  {
    title: "Experience Using NextJS",
    category: "Tool Framework",
    src: Note,
    created_at: "3 min ago",
  },
  {
    title: "Eating",
    category: "Food",
    src: Rental,
    created_at: "3 min ago",
  },
];

export const skills = [
  {
    title: "HTML",
    description: "Markup language",
    icon: Html
  },
  {
    title: "CSS",
    description: "Styling language",
    icon: Css
  },
  {
    title: "Bootstrap",
    description: "Front-end framework",
    icon: Bootstrap
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first CSS framework",
    icon: Tailwindcss
  },
  {
    title: "Material-UI",
    description: "React UI framework",
    icon: Mui
  },
  {
    title: "JavaScript",
    description: "Programming language",
    icon: Javascript
  },
  {
    title: "React.js",
    description: "JavaScript library for UI",
    icon: React
  },
  {
    title: "Next.js",
    description: "React framework",
    icon: Nextjs
  },
  {
    title: "Node.js",
    description: "JavaScript runtime",
    icon: Nodejs
  },
  {
    title: "Nest.js",
    description: "Node.js framework",
    icon: Nestjs
  },
  {
    title: "Express.js",
    description: "Node.js framework",
    icon: Express
  },
  {
    title: "MySQL",
    description: "Relational database",
    icon: Mysql
  },
  {
    title: "PHP",
    description: "Server-side scripting language",
    icon: Php
  },
  {
    title: "Laravel",
    description: "PHP web application framework",
    icon: Laravel
  },
];
