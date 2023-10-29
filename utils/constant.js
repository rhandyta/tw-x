import Profile from "@/public/assets/images/profile.jpg";
import Covid from "@/public/assets/images/covid.jpg";
import Note from "@/public/assets/images/note.jpg";
import Rental from "@/public/assets/images/penyewaan.jpg";
import Nasi from "@/public/assets/images/nasi.png";

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
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BookIcon from "@mui/icons-material/Book";
import InfoIcon from "@mui/icons-material/Info";
import MailIcon from "@mui/icons-material/Mail";

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

const d = new Date();
const datetime = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`

export const linkNavigation = [
  {
    title: "Home",
    link: "/",
    icon: <SpaceDashboardIcon />,
  },
  {
    title: "Work",
    link: "/works",
    icon: <EngineeringIcon />,
  },
  {
    title: "Blog",
    link: "/blogs",
    icon: <BookIcon />,
  },
  {
    title: "About",
    link: "/about",
    icon: <InfoIcon />,
  },
  {
    title: "Guest Book",
    link: "/guestbook",
    icon: <MailIcon />,
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
    slug: "Covid-19",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    project: [
      {
        name: "challenge",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        name: "outcome",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
    timeline: "2 month ago",
    position: "Programmer",
    createdAt: datetime,
    author: "Rhandyta Briantama",
    pictures: [
      {
        picture: Covid,
        title: "Picture 1"
      },
      {
        picture: Covid,
        title: "Picture 2"
      },
      {
        picture: Covid,
        title: "Picture 3"
      },
      {
        picture: Covid,
        title: "Picture 4"
      },
      {
        picture: Covid,
        title: "Picture 5"
      },
    ],
  },
  {
    category: "daily life",
    title: "Note App",
    slug: "note-app",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    project: [
      {
        name: "challenge",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        name: "outcome",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
    timeline: "2 month ago",
    position: "Programmer",
    createdAt: datetime,
    author: "Rhandyta Briantama",
    pictures: [
      {
        picture: Note,
      },
      {
        picture: Note,
      },
      {
        picture: Note,
      },
      {
        picture: Note,
      },
      {
        picture: Note,
      },
    ],
  },
  {
    category: "service",
    title: "Rental",
    slug: "rental",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    project: [
      {
        name: "challenge",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        name: "outcome",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
    timeline: "2 month ago",
    position: "Programmer",
    createdAt: datetime,
    author: "Rhandyta Briantama",
    pictures: [
      {
        picture: Rental,
      },
      {
        picture: Rental,
      },
      {
        picture: Rental,
      },
      {
        picture: Rental,
      },
      {
        picture: Rental,
      },
    ],
  },
];

export const blogs = [
  {
    title: "Hi First Post",
    category: "Design",
    src: Covid,
    created_at: datetime,
    slug: "hi-first-post",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo corrupti amet debitis perspiciatis minus molestias aut alias consequuntur eos, vero blanditiis dolore ad? Eligendi voluptatem voluptas, sint non assumenda veniam, eos minima quibusdam ipsam unde praesentium illo, consequatur ullam earum quisquam quia eaque nihil aliquam labore placeat quaerat molestiae neque tempore! Voluptatem fuga labore aut facere itaque cum, animi commodi corrupti obcaecati libero sint dolorem impedit possimus quasi, accusamus pariatur sunt quas distinctio voluptate illum recusandae! Nulla quisquam consequatur rem ad eius tenetur commodi quos quas iste, iusto adipisci laboriosam enim dolor. Corrupti vero aut omnis excepturi? Ratione saepe quisquam, obcaecati dolorum fugit expedita numquam quod dolor unde cum culpa accusamus aperiam maxime perspiciatis voluptatum? Quibusdam fugit ullam necessitatibus vero officiis nostrum provident esse quis autem libero vel nemo voluptate nihil",
    author: "Rhandyta Briantama"
  },
  {
    title: "Experience Using NextJS",
    category: "Tool Framework",
    src: Note,
    created_at: datetime,
    slug: "experience-using-nextjs",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo corrupti amet debitis perspiciatis minus molestias aut alias consequuntur eos, vero blanditiis dolore ad? Eligendi voluptatem voluptas, sint non assumenda veniam, eos minima quibusdam ipsam unde praesentium illo, consequatur ullam earum quisquam quia eaque nihil aliquam labore placeat quaerat molestiae neque tempore! Voluptatem fuga labore aut facere itaque cum, animi commodi corrupti obcaecati libero sint dolorem impedit possimus quasi, accusamus pariatur sunt quas distinctio voluptate illum recusandae! Nulla quisquam consequatur rem ad eius tenetur commodi quos quas iste, iusto adipisci laboriosam enim dolor. Corrupti vero aut omnis excepturi? Ratione saepe quisquam, obcaecati dolorum fugit expedita numquam quod dolor unde cum culpa accusamus aperiam maxime perspiciatis voluptatum? Quibusdam fugit ullam necessitatibus vero officiis nostrum provident esse quis autem libero vel nemo voluptate nihil",
    author: "Rhandyta Briantama"
  },
  {
    title: "Eating",
    category: "Food",
    src: Rental,
    created_at: datetime,
    slug: "eating",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo corrupti amet debitis perspiciatis minus molestias aut alias consequuntur eos, vero blanditiis dolore ad? Eligendi voluptatem voluptas, sint non assumenda veniam, eos minima quibusdam ipsam unde praesentium illo, consequatur ullam earum quisquam quia eaque nihil aliquam labore placeat quaerat molestiae neque tempore! Voluptatem fuga labore aut facere itaque cum, animi commodi corrupti obcaecati libero sint dolorem impedit possimus quasi, accusamus pariatur sunt quas distinctio voluptate illum recusandae! Nulla quisquam consequatur rem ad eius tenetur commodi quos quas iste, iusto adipisci laboriosam enim dolor. Corrupti vero aut omnis excepturi? Ratione saepe quisquam, obcaecati dolorum fugit expedita numquam quod dolor unde cum culpa accusamus aperiam maxime perspiciatis voluptatum? Quibusdam fugit ullam necessitatibus vero officiis nostrum provident esse quis autem libero vel nemo voluptate nihil",
    author: "Rhandyta Briantama"
  },
];

export const skills = [
  {
    title: "HTML",
    description: "Markup language",
    icon: Html,
  },
  {
    title: "CSS",
    description: "Styling language",
    icon: Css,
  },
  {
    title: "Bootstrap",
    description: "Front-end framework",
    icon: Bootstrap,
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first CSS framework",
    icon: Tailwindcss,
  },
  {
    title: "Material-UI",
    description: "React UI framework",
    icon: Mui,
  },
  {
    title: "JavaScript",
    description: "Programming language",
    icon: Javascript,
  },
  {
    title: "React.js",
    description: "JavaScript library for UI",
    icon: React,
  },
  {
    title: "Next.js",
    description: "React framework",
    icon: Nextjs,
  },
  {
    title: "Node.js",
    description: "JavaScript runtime",
    icon: Nodejs,
  },
  {
    title: "Nest.js",
    description: "Node.js framework",
    icon: Nestjs,
  },
  {
    title: "Express.js",
    description: "Node.js framework",
    icon: Express,
  },
  {
    title: "MySQL",
    description: "Relational database",
    icon: Mysql,
  },
  {
    title: "PHP",
    description: "Server-side scripting language",
    icon: Php,
  },
  {
    title: "Laravel",
    description: "PHP web application framework",
    icon: Laravel,
  },
];

export const guestbooks = [
  {
    name: "John Doe",
    message:
      "lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem loremlorem lorem lorem lorem loremlorem lorem lorem lorem loremlorem lorem lorem lorem loremlorem lorem lorem lorem loremlorem lorem lorem lorem loremlorem lorem lorem lorem lorem",
    icon: "https://mui.com/static/images/avatar/2.jpg",
  },
  {
    name: "Abdul",
    message: "lorem lorem lorem lorem lorem",
    icon: "https://mui.com/static/images/avatar/1.jpg",
  },
  {
    name: "Bedul",
    message: "lorem lorem lorem lorem lorem",
    icon: "https://mui.com/static/images/avatar/3.jpg",
  },
  {
    name: "Queue",
    message: "lorem lorem lorem lorem lorem",
    icon: "https://mui.com/static/images/avatar/4.jpg",
  },
  {
    name: "Nasi",
    message: "lorem lorem lorem lorem lorem",
    icon: "https://mui.com/static/images/avatar/5.jpg",
  },
];
