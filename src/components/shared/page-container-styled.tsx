import styled from "styled-components";
import { sizes } from "../../constants/media-query-sizes";

export const PageContainerFlexible = styled.div`
  background-color: #222;
  padding-top: 8vh;
  display: flex;
  flex-direction: column;
  @media (${sizes.laptop}) {
    flex-direction: row;
  }
`;

export const PageContainer = styled.div`
  background-color: #222;
  padding-top: 8vh;
  display: flex;
  flex-direction: column;
`;

export const PageContainerNoPadding = styled.div`
  background-color: #222;
`;

export const CenteringContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
