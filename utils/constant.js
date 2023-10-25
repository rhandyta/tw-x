import Profile from '@/public/assets/images/profile.jpg'
import Covid from '@/public/assets/images/covid.jpg'
import Note from '@/public/assets/images/note.jpg'
import Rental from '@/public/assets/images/penyewaan.jpg'


import DescriptionIcon from '@mui/icons-material/Description';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver'; //komunikasi
import SyncProblemIcon from '@mui/icons-material/SyncProblem'; //problem solving
import PsychologyIcon from '@mui/icons-material/Psychology'; //logical thinking
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates'; //creavity
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom'; //time management
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement'; //adability
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity'; // collaboration skills
import Diversity3Icon from '@mui/icons-material/Diversity3'; // professional ethics


export const linkNavigation = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "Work",
        link: "work"
    },
    {
        title: "Blog",
        link: "blogs"
    },
    {
        title: "About",
        link: "about"
    },
    {
        title: "Contact",
        link: "contact"
    },
]

export const profile = 
    {
        name: "photo profile",
        src: Profile

    }


export const linkExternal = [
    {
        name: "resume rhandyta briantama",
        link: "https://registry.jsonresume.org/rhandyta",
        icon: DescriptionIcon
    },
    {
        name: "linkedin rhandyta briantama",
        link: "https://www.linkedin.com/in/rhandyta-briantama-806268229/",
        icon: LinkedInIcon
    },
    {
        name: "github rhandyta briantama",
        link: "https://www.github.com/rhandyta",
        icon: GitHubIcon
    }
]

export const softSkills = [
    {
        name: "Communication Skills",
        icon: RecordVoiceOverIcon
    },
    {
        name: "Problem-Solving Skills",
        icon: SyncProblemIcon
    },
    {
        name: "Logical Thinking",
        icon: PsychologyIcon
    },
    {
        name: "Creativity",
        icon: TipsAndUpdatesIcon
    },
    {
        name: "Time Management",
        icon: HourglassBottomIcon
    },
    {
        name: "Adaptability",
        icon: SelfImprovementIcon
    },
    {
        name: "Collaboration Skills",
        icon: ReduceCapacityIcon
    },
    {
        name: "Professional Ethics",
        icon: Diversity3Icon
    },
]

export const projects = [

    {
        category: "healthy",
        title: "Covid-19",
        src: Covid
    },
    {
        category: "daily life",
        title: "Note App",
        src: Note
    },
    {
        category: "service",
        title: "Rental",
        src: Rental
    },

]
export const blogs = [

    {
        title: "Hi First Post",
        category: "Design",
        src: Covid,
        created_at: "3 min ago"
    },
    {
        title: "Experience Using NextJS",
        category: "Tool Framework",
        src: Note,
        created_at: "3 min ago"
    },
    {
        title: "Eating",
        category: "Food",
        src: Rental,
        created_at: "3 min ago"
    },

]