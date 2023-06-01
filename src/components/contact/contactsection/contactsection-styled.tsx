import styled from "styled-components";
import { sizes } from "../../../constants/media-query-sizes";

export const ContactContainer = styled.div`
  padding: 3vh 0vh 3vh 0vh;
  display: flex;
  background-color: #111;
  flex-direction: column;
  align-items:flex-start;
  justify-content:space-evenly;
  @media (${sizes.tablet}) {
    flex-direction: row;
  }
`;
