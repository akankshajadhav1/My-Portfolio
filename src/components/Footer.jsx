import { Github } from "lucide-react";
import { Twitch } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full  mx-auto bg-[#A98B76] min-h-62 flex flex-col items-center justify-center gap-4">
      <h2 className="text-4xl md:text-6xl font-semibold text-neutral-50 font-serif italic">
        Akanksha Jadhav
      </h2>

      <div className="flex items-center justify-center gap-8">
        <a href="https://www.linkedin.com/in/akanksha-jadhav-4b6681262/" target="_blank">
          <Linkedin className="text-2xl text-neutral-50 hover:scale-110 transition-all duration-150 ease-in-out" />
        </a>

        <a href="https://github.com/akankshajadhav1" target="_blank">
          <Github className="text-2xl text-neutral-50 hover:scale-110 transition-all duration-150 ease-in-out" />
        </a>

        <a href="https://www.instagram.com/akankshajadhav1/" target="_blank">
          <Instagram className="text-2xl text-neutral-50 hover:scale-110 transition-all duration-150 ease-in-out" />
        </a>

        <a href="https://www.twitch.tv/akankshajadhav1" target="_blank">
          <Twitch className="text-2xl text-neutral-50 hover:scale-110 transition-all duration-150 ease-in-out" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;