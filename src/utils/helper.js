

import { AI1, Book, Chat, Music, MyPortfolio ,Dictionary} from '../assets/index.js';

export const NavMenu = [
    {
        label:"Home",
        url:"/",
        key:"home"
    },
    {
        label:"Work",
        url:"/?section=work",
        key:"work"
    },
    {
        label:"About",
        url:"/?section=about",
        key:"about"
    },
    {
        label:"Services",
        url:"/?section=services",
        key:"services"
    },
    {
        label:"Testimonials",
        url:"/?section=testimonials",
        key:"testimonials"
    },
    {
        label:"Contact",
        url:"/contact",
        key:"contact"
    },
]

export const projects = [
  {
    id: 1,
    title: "AI Interview Assistant",
    description: "A platform to improve interview skills using AI-based mock interviews and feedback.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    image: AI1,
    github: "https://github.com/akankshajadhav1/Ai-MockDesk"
  },
  {
    id: 2,
    title: "Online Bookstore",
    description: "A full-stack bookstore app with cart, search, and order management features.",
    techStack: ["React", "Redux", "Node.js", "MongoDB"],
    image: Book,
    github: "https://github.com/akankshajadhav1/BookStoreManagement"
  },
  {
    id: 3,
    title: "Chat Application",
    description: "Real-time chat app with messaging, media sharing, and user presence.",
    techStack: ["React", "Socket.io", "Node.js", "Express"],
    image: Chat,
    github: "https://github.com/akankshajadhav1/ChatApp"
  },
  {
    id: 4,
    title: "Music Player App",
    description: "A modern music streaming UI with playlist and audio controls.",
    techStack: ["React", "Tailwind", "Node.js"],
    image: Music,
    github: "https://github.com/akankshajadhav1/MusicPlayerApp"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Personal portfolio to showcase projects, skills, and contact details.",
    techStack: ["React", "Tailwind CSS"],
    image: MyPortfolio,
    github: "https://github.com/akankshajadhav1/MyPortfolio"
  },
  {
    id: 6,
    title: "Dictionary App",
    description: "A simple dictionary app with search and definition features.",
    techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    image: Dictionary,
    github: "https://github.com/akankshajadhav1/MyDictionaryApp"
  },
  
];