import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const HBase = styled(Typography)`
  font-family: "consolas", "courier new", monospace;
  @media (min-width: 314px) {
    font-size: 0.75rem;
  }
  @media (min-width: 768px) {
    font-size: 1rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }
`;

export const H5Base = styled(HBase)`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 0.4rem;
  `;

export const H5Packed = styled(HBase)`
  width: 100%;
  margin: 0px 16px 0px 16px;
`;

export const H3Title = styled(HBase)`
  width: 100%;
  font-family: "consolas", "courier new", monospace;
  color: white;
  place-self: center;
  align-self: center;
  text-align: center;
  margin: 8px 16px 16px 16px;
  font-size: 1.5rem;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1440px) {
    font-size: 3rem;  
  }
`;

export const H5Left = styled(H5Base)`
  align-self: flex-start;
  text-align: right;
  box-shadow: 14px -14px 14px #111;
`;

export const H5Right = styled(H5Base)`
  align-self: flex-end;
  text-align: left;
  box-shadow: -14px -14px 14px #111;
`;
