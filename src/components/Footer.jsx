import { Github } from "lucide-react";
import { Twitch } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mx-auto bg-[#A98B76] min-h-36 md:min-h-62 flex flex-col items-center justify-center gap-2 md:gap-4 px-4 py-6 md:py-0">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-neutral-50 font-serif italic text-center">
        Akanksha Jadhav
      </h2>

      <div className="flex items-center justify-center gap-5 sm:gap-6 md:gap-8">
        <a href="https://www.linkedin.com/in/akanksha-jadhav-4b6681262/" target="_blank">
          <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-50 hover:scale-110 transition-all duration-150 ease-in-out" />
        </a>

        <a href="https://github.com/akankshajadhav1" target="_blank">
          <Github className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-50 hover:scale-110 transition-all duration-150 ease-in-out" />
        </a>

        <a href="https://www.instagram.com/akankshajadhav1/" target="_blank">
          <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-50 hover:scale-110 transition-all duration-150 ease-in-out" />
        </a>

        <a href="https://www.twitch.tv/akankshajadhav1" target="_blank">
          <Twitch className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-50 hover:scale-110 transition-all duration-150 ease-in-out" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;