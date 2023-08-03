import styled from "@emotion/styled";

export const NavbarContainer = styled.div`
  width: 100%;
  background-color: var(--background-color);
  display: flex;
  justify-content: center;
  height: 5em;
`;

export const NavbarContent = styled.div`
  max-width: 65em;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarLogoLink = styled.a`
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-color);
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: var(--link-hover-color);
    text-decoration: underline;
  }
`;

export const NavbarLinks = styled.div`
  display: flex;
  gap: 1.75em;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavbarLink = styled.a`
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  color: var(--text-color);
  text-decoration: none;

  &:hover {
    color: var(--link-hover-color);
    text-decoration: underline;
  }
`;

export const NavbarThemeButton = styled.button`
  border: none;
  background-color: transparent;
  width: 1.6em;
  color: var(--text-color);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
    
  }
`;
