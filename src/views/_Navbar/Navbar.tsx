import { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import {
  NavbarContainer,
  NavbarContent,
  NavbarLink,
  NavbarLinks,
  NavbarLogoLink,
  NavbarThemeButton,
} from "./Navbar.styled";

export const Navbar = () => {
  const sound = new Audio("/click.mp3");
  sound.volume = 0.35;

  const setTheme = (theme: string) => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
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
        <NavbarLogoLink>Wojciech Marek</NavbarLogoLink>
        <NavbarLinks>
          <NavbarLink href="#about">About</NavbarLink>
          <NavbarLink href="#experience">Experience</NavbarLink>
          <NavbarLink href="#projects">Projects</NavbarLink>
          {/* <NavbarLink href="#articles">Articles</NavbarLink> */}
          <NavbarLink href="#contact">Contact</NavbarLink>
          <NavbarThemeButton onClick={handleThemeClick}>
            {isDark ? (
              <span>
                <SunIcon className="h-6 w-6 text-blue-500" />
              </span>
            ) : (
              <span>
                <MoonIcon className="h-6 w-6 text-yellow-500" />
              </span>
            )}
          </NavbarThemeButton>
        </NavbarLinks>
      </NavbarContent>
    </NavbarContainer>
  );
};
