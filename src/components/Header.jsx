import React from 'react'
import { NavMenu } from "../utils/helper"
import { Button } from './ui/button'
import { cn } from "../lib/utils"

const Header = () => {
  const [activeSection, setActiveSection] = React.useState("home")

  React.useEffect(() => {
    const syncFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const section = params.get("section");
      setActiveSection(section || "home");
    };

    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);

    return () => {
      window.removeEventListener("popstate", syncFromUrl);
    }
  }, []);

  const handleNavigationLinkClick = (e, menu) => {
    e.preventDefault();

    const url = new URL(window.location);

    if (menu.key === "home") {
      url.search = "";
      window.history.pushState({}, "", url);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      return;
    }

    url.searchParams.set("section", menu.key);
    window.history.pushState({}, "", url);

    document
      .getElementById(menu.key)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

    setActiveSection(menu.key);
  };

  return (
    <header className='flex items-center justify-between w-full  p-4 md:p-8 fixed top-0 left-0 z-50'>
      <h1 className='text-2xl md:text-4xl italic font-bold font-serif text-[#612D53] justify-self-start'>
        Ak.      </h1>

      <nav className='justify-self-center'>
        <ul className='flex gap-6 items-center'>
          {NavMenu.filter(menu => menu.key !== 'contact').map((menu) => {
            const isActive = activeSection === menu.key;

            return (
              <li key={menu.key}>
                <a
                  href={menu.url}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigationLinkClick(e, menu);
                  }}
                  className={cn(

                    isActive
                      ? 'text-[#2C2C2C] font-bold '
                      : 'text-neutral-500 transition-all ease-in-out duration-75 p-2.5 hover:text-neutral-800'
                  )}
                >
                  {menu.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <a className='justify-self-end' href="/?section=contact"
      onClick={(e) => {
                    e.preventDefault();
                    handleNavigationLinkClick(e, {
                      label:"Contact",
                      url:"/?section=contact",
                      key:"contact"
                    });
                  }}
      >
        <Button size='sm' className="ml-4 cursor-pointer">
          Contact Me
        </Button>
      </a>
    </header>
  );
};

export default Header;