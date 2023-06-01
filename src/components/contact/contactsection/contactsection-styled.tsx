import styled from "styled-components";
import { sizes } from "../../../constants/media-query-sizes";
import { Box } from "@mui/material";

export const ContactContainer = styled(Box)`
  padding: 3vh 0vh 0vh 0vh;
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  justify-content:space-evenly;
  @media (${sizes.tablet}) {
    flex-direction: row;
  }
`;
