import {
  NavbarContainer,
  NavbarContent,
  NavbarLink,
  NavbarLinkItemButton,
  NavbarLinkItem,
  NavbarLinks,
  NavbarLogoLink,
} from "./Navbar.styled";

export const Navbar = () => {
  const sound = new Audio("/click.mp3");
  sound.volume = 0.35;

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
