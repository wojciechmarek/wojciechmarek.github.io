import { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import {
  NavbarContainer,
  NavbarContent,
  NavbarLink,
  NavbarLinkItemButton,
  NavbarLinkItem,
  NavbarLinks,
  NavbarLogoLink,
  NavbarThemeButton,
} from "./Navbar.styled";

export const Navbar = () => {
  const sound = new Audio("/click.mp3");
  sound.volume = 0.35;

  const setTheme = (theme: string) => {
    //const root = document.documentElement;
    //root.setAttribute("data-theme", theme);
  };

  const [isDark, setIsDark] = useState(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(isDark ? "dark" : "light");
    return isDark;
  });

  const handleThemeClick = () => {
    sound.play();
    setIsDark(!isDark);
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <NavbarContainer>
      <NavbarContent>
        <NavbarLogoLink href="/" aria-label="Home">
          Wojciech Marek
        </NavbarLogoLink>
        <NavbarLinks>
          <NavbarLinkItem>
            <NavbarLink href="#about" aria-label="About">
              about
            </NavbarLink>
          </NavbarLinkItem>
          <NavbarLinkItem>
            <NavbarLink href="#experience" aria-label="Experience">
              experience
            </NavbarLink>
          </NavbarLinkItem>
          <NavbarLinkItem>
            <NavbarLink href="#projects" aria-label="Projects">
              projects
            </NavbarLink>
          </NavbarLinkItem>
          <NavbarLinkItem>
            <NavbarLink href="#contact" aria-label="Contact">
              contact
            </NavbarLink>
          </NavbarLinkItem>
          <NavbarLinkItemButton>
            {/* <NavbarThemeButton
              onClick={handleThemeClick}
              aria-label={`Toggle theme to ${isDark ? "light" : "dark"}`}
            >
              {isDark ? (
                <span>
                  <SunIcon className="h-6 w-6 text-blue-500" />
                </span>
              ) : (
                <span>
                  <MoonIcon className="h-6 w-6 text-yellow-500" />
                </span>
              )}
            </NavbarThemeButton> */}
          </NavbarLinkItemButton>
        </NavbarLinks>
      </NavbarContent>
    </NavbarContainer>
  );
};
