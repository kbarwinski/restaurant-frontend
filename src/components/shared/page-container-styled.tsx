import styled from "styled-components";
import { Box, Container, CssBaseline, Paper } from "@mui/material";

export const PageContainerFlexible = styled(Box)`
  padding-top: 8vh;
  display: flex;
  flex-direction: column;
`;

export const PageContainer = styled(Box)`
  padding-top: 8vh;
  display: flex;
  flex-direction: column;
`;

export const PageContainerNoPadding = styled(Box)`
`;

export const CenteringContainer = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
