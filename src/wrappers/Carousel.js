import styled from "styled-components";

export const CarouselWrapper = styled.section`
  border-bottom: 10px solid var(--fletnix-secondary);

  .swiper {
    padding: 50px 20px;
  }

  .swiper .swiper-slide {
    background-position: center;
    background-size: contain;
    width: 300px;
    height: 400px;
    -webkit-box-reflect: below 1px
      linear-gradient(transparent, transparent, #0009);
  }
`;
