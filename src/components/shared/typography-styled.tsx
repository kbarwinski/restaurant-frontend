import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const H5Base = styled(Typography)`
  max-width: 65%;
  min-width: 50%;
  padding-left: 32px;
  padding-right: 32px;
  margin-top: 16px;
  margin-bottom: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #ddd;
`;

export const H3Title = styled(Typography)`
  width: 100%;
  color: white;
  place-self: center;
  background-color: #111;
  align-self: center;
  text-align: center;
  margin: 8px 16px 16px 16px;
`;

export const H5Left = styled(H5Base)`
  align-self: flex-start;
  text-align: right;
  box-shadow: 20px -20px 14px #111;
`;

export const H5Right = styled(H5Base)`
  align-self: flex-end;
  text-align: left;
  box-shadow: -20px -20px 14px #111;
`;
