import styled from "styled-components";
import { TextField } from "@mui/material";

//Style CSS for simple black container
export const FormContainer = styled.div`
  background-color: #ccc;
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items:center;
  min-height:60%;
  min-width:20%;
  padding: 0px 0px 40px 0px;
`;

export const CustomTextField = styled(TextField)`
  width: 100%;
  &:hover{  
    background-color: #ccc;
  }
`;