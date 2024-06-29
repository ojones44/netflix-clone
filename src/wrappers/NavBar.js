import styled from "styled-components";

export const NavBarWrapper = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--nav-height);
  z-index: 99;
  background-color: var(--fletnix-black);
  width: 100%;
  padding-inline: var(--section-gutter);

  h1 {
    font-family: var(--ff-secondary);
    color: var(--fletnix-primary);
    font-size: var(--fs-900);

    &::selection {
      background-color: var(--fletnix-white);
    }
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
