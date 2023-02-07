import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const H5Base = styled(Typography)`
  max-width: 65%;
  min-width: 50%;
  padding-left: 32px;
  padding-right: 32px;
  margin-top: 16px;
  margin-bottom: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #ccc;
`;

export const H5Left = styled(H5Base)`
  align-self: flex-start;
  text-align: right;
`;

export const H5Right = styled(H5Base)`
  align-self: flex-end;
  text-align: left;
`;
