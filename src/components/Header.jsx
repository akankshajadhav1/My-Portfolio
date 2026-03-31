import React from 'react'
import { NavMenu } from "../utils/helper"
import { Button } from './ui/button'
import { cn } from "../lib/utils"
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [activeSection, setActiveSection] = React.useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

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

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleNavigationLinkClick = (e, menu) => {
    e.preventDefault();
    setMobileMenuOpen(false);

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
    <header className={cn(
      'flex items-center justify-between w-full p-3 md:p-8 fixed top-0 left-0 z-50 transition-colors duration-300',
      mobileMenuOpen
        ? 'bg-[#FFFBF1]'
        : 'bg-gradient-to-b from-[#FFFBF1]/90 to-transparent backdrop-blur-sm'
    )}>
      <h1 className='text-xl md:text-4xl italic font-bold font-serif text-[#612D53] justify-self-start'>
        Ak.
      </h1>

      {/* Desktop Nav */}
      <nav className='hidden md:block justify-self-center'>
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

      {/* Desktop Contact Button */}
      <a className='hidden md:block justify-self-end' href="/?section=contact"
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

      {/* Mobile Hamburger Button */}
      <button
        className='md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors z-[60] relative'
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {mobileMenuOpen
          ? <X size={22} className="text-[#4B2E2B]" />
          : <Menu size={22} className="text-[#4B2E2B]" />
        }
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] md:hidden transition-opacity duration-300',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-[75%] max-w-[300px] bg-[#FFFBF1] shadow-[-8px_0_30px_rgba(0,0,0,0.15)] z-[60] md:hidden',
          'transform transition-transform duration-300 ease-in-out',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Close button inside drawer */}
        <div className='flex items-center justify-between px-4 pt-4'>
          <h2 className='text-lg font-bold font-serif italic text-[#612D53]'>Menu</h2>
          <button
            className='p-2 rounded-lg hover:bg-[#A98B76]/10 transition-colors'
            onClick={() => setMobileMenuOpen(false)}
            aria-label='Close menu'
          >
            <X size={22} className="text-[#4B2E2B]" />
          </button>
        </div>

        {/* Divider */}
        <div className='mx-4 mt-2 mb-2 h-px bg-[#A98B76]/20'></div>

        <div className='flex flex-col px-4'>
          <nav>
            <ul className='flex flex-col gap-1'>
              {NavMenu.map((menu) => {
                const isActive = activeSection === menu.key;

                return (
                  <li key={menu.key}>
                    <a
                      href={menu.url}
                      onClick={(e) => handleNavigationLinkClick(e, menu)}
                      className={cn(
                        'block py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200',
                        isActive
                          ? 'text-[#4B2E2B] font-bold bg-[#A98B76]/15 border-l-3 border-[#A98B76]'
                          : 'text-neutral-500 hover:text-[#4B2E2B] hover:bg-[#A98B76]/5'
                      )}
                    >
                      {menu.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className='mt-6 px-2'>
            <a href="/?section=contact"
              onClick={(e) => handleNavigationLinkClick(e, {
                label: "Contact",
                url: "/?section=contact",
                key: "contact"
              })}
            >
              <Button size='sm' className="w-full cursor-pointer">
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;