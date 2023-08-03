import styled from "@emotion/styled";

export const NavbarContainer = styled.div`
  width: 100%;
  background-color: #0b0c13;
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
  color: #fff;
  cursor: pointer;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #c9335d;
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
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #c9335d;
    text-decoration: underline;
  }
`;
