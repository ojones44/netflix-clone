import styled, { css } from "styled-components";

const footer = (theme) =>
  ({
    dark: css``,
    light: css`
      color: var(--fletnix-black);
      $:visited: var(--fletnix-red);
    `,
    retro: css``,
    synthwave: css``,
  }[theme.themeName]);

export const FooterWrapper = styled.footer`
  ${({ theme }) => footer(theme)}
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 25px;
  }

  .contact {
    padding: 50px 0 30px 0;
  }

  #languages {
    padding: 10px 15px 10px 10px;
    background-color: transparent;
    margin-bottom: 25px;
    border: 1px solid var(--fletnix-primary);
    border-radius: 4px;
    color: var(--clr-text);
  }
`;
