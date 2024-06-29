import styled from "styled-components";

export const FeatureCardWrapper = styled.div`
  border-bottom: 10px solid var(--fletnix-secondary);
  padding: 70px 0px;

  .heading {
    margin-bottom: 15px;
  }

  & > div {
    display: grid;
    gap: 60px;
    align-items: center;
    grid-template-columns: 1fr 1fr;
  }

  img {
    max-width: 400px;
  }

  @media (min-width: 768px) {
    &:nth-child(even) img {
      order: -1;
    }
  }

  @media (max-width: 768px) {
    & > div {
      grid-template-columns: 1fr;
      text-align: center;
      place-items: center;
    }

    img {
      width: 100%;
    }
  }
`;
