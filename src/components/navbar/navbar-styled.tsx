import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";

export const CustomizedAppBar = styled(AppBar)`
  height: 8vh;
  user-select: none;
  background-image: linear-gradient(0, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  background-color: rgba(0, 0, 0, 0);
  box-shadow: 0px 0px 0px 0px;
  /* ${(props: any) => props.theme.breakpoints.up("sm")} {
      background-color: rgba(0,0,0,0.0);
  } */
`;

export const CustomizedToolbar = styled(Toolbar)``;

export const CustomizedButtonContainer = styled(Container)`
  display: flex;
  justify-content: center;
`;

export const CustomizedButton = styled(Button)`
  width: auto;
`;

export const CustomizedLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
