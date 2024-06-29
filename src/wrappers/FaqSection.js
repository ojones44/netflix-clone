import styled, { css } from "styled-components";
import { inverter } from "../themes/inverter";

const faqInverter = (theme) =>
  ({
    dark: css``,
    light: css`
      color: var(--fletnix-black);
      background-color: var(--fletnix-white);
    `,
    retro: css`
      color: var(--fletnix-primary);
      background-color: var(--fletnix-black);
    `,
    synthwave: css``,
  }[theme.themeName]);

export const FaqSectionWrapper = styled.div`
  .faq-signup {
    padding: 65px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    border-bottom: 10px solid var(--fletnix-secondary);
    text-align: center;
  }

  input {
    ${({ theme }) => faqInverter(theme)}
  }
`;

export const FaqCardWrapper = styled.div`
  color: ${({ theme }) => theme.colors.color};
  .question {
    ${({ theme }) => inverter(theme)}
    font-size: var(--fs-700);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    cursor: pointer;
    transition: all 0.25s ease-out;
    margin-bottom: 7px;
  }

  .question p {
    flex: 1;
  }

  .question svg {
    flex-basis: 50px;
    height: 40px;
    width: 40px;
    fill: white;
    transition: all 0.3s ease-in;
  }

  .question:hover {
    background-color: var(--fletnix-secondary);
    ${({ theme }) =>
      ({
        retro: css`
          color: var(--fletnix-primary);
          background-color: var(--fletnix-secondary);
        `,
      }[theme.themeName])}
  }

  .active svg {
    transform: rotate(225deg);
  }

  .answer {
    display: none;
    max-height: 0;
    transform: translateY(-100%);
    transition: all 0.5s;
  }

  .answer-display {
    ${({ theme }) => inverter(theme)}
    padding: 20px;
    margin-bottom: 7px;
    transform: translateY(0);
    max-height: 500px;
    display: block;
    transition: all 0.5s;
  }

  @media (max-width: 768px) {
    .question p {
      font-size: var(--fs-600);
    }

    .question svg {
      flex-basis: 50px;
      height: 25px;
      width: 25px;
    }
  }
`;
