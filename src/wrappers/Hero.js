import styled from "styled-components";

export const HeroWrapper = styled.div`
  height: calc(100vh);
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  background-image: url(/movie-bg.jpg);
  background-size: cover;
  background-position: center;
  position: relative;
  color: var(--fletnix-white);

  &::after {
    content: "";
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
  }

  & > * {
    z-index: 1;
  }

  input {
    border-color: var(--fletnix-white);
  }

  input::placeholder {
    color: var(--fletnix-white);
  }

  @media (max-width: 768px) {
    padding-inline: 1.25rem;
  }
`;
