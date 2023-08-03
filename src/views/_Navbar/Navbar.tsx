import {
  NavbarContainer,
  NavbarContent,
  NavbarLink,
  NavbarLinks,
  NavbarLogoLink,
} from "./Navbar.styled";

export const Navbar = () => {
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
          {/* <NavbarLink>☀</NavbarLink> */}
        </NavbarLinks>
      </NavbarContent>
    </NavbarContainer>
  );
};
