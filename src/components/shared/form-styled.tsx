import styled from "styled-components";
import TextField from "@mui/material/TextField/TextField";
import { Paper } from "@mui/material";

export const FormContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: sticky;
  padding: 1rem;
  border-radius: 1rem;
  min-width: 60%;
  max-width: 100%;
  min-height: 50vh;
`;

export const ModalFormContainer = styled(Paper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 60%;
  min-width: 30%;
  padding: 1rem;
`;

export const StyledTextField = styled(TextField)`
  margin: 0.25rem!important;
  width: 80%;
  height:100%;
`;
