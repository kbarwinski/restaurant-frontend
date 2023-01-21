import styled from "styled-components";

export const ImageContainer = styled.img`
  min-height: 95vh;
  max-height: 100vh;
  width: 100vw;
  object-fit: cover;
  z-index:-1;
`;

export const CarouselContainer = styled.div`
  user-select: none;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DarkOverlay = styled.div`
    width:100%;
    height:100%;
    z-index:1;
    position:absolute;
    background-color:rgba(0,0,0,0.7);
`;

export const WelcomeTextContainer = styled.div`
  user-select:all;
  pointer-events: all;
  z-index:2;
  display: flex;
  flex-direction: column;
  position: absolute;
`;
