import { css } from "styled-components";

export const inverter = (theme) =>
  ({
    dark: css``,
    light: css`
      color: var(--fletnix-white);
      background-color: var(--fletnix-black);
    `,
    retro: css``,
    synthwave: css``,
  }[theme.themeName]);
