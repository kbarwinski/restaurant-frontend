import styled from "styled-components";
import TextField from "@mui/material/TextField/TextField";

export const FormContainer = styled.div`
  background-color: #ccc;
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
  max-height: 70vh;
`;

export const ModalFormContainer = styled.div`
  background-color: #ccc;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 60%;
  min-width: 20%;
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
  &:hover {
    background-color: #ccc;
  }
`;
