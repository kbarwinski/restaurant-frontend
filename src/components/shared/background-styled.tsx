import { Box, Paper } from '@mui/material';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400');
`;

const rotate = keyframes`
  0% {transform: translate(-50%, 0) rotateZ(0deg);}
  50% {transform: translate(-50%, -2%) rotateZ(180deg);}
  100% {transform: translate(-50%, 0%) rotateZ(360deg);}
`;

export const StyledBody = styled(Paper)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //min-height: 100vh;
  font-family: Roboto;
  overflow: hidden;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    min-width: 300vw;
    //min-height: 300vw;
    animation-name: ${rotate};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  &:before {
    bottom: 15vh;
    border-radius: 45%;
    animation-duration: 10s;
  }

  &:after {
    bottom: 12vh;
    opacity: 0.5;
    border-radius: 47%;
    animation-duration: 10s;
  }
`;

export const StyledH1 = styled(Box)`
  z-index: 10;
  margin: 0;
  font-weight: 300;
  line-height: 1.3;
  text-align: center;

`;

export const StyledH2 = styled(Box)`
  z-index: 10;
  margin: 0;
  font-weight: 300;
  line-height: 1.3;
  text-align: center;
`;
