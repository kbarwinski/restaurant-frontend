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

export const StyledTextField = styled(TextField)`
  width: 100%;
  &:hover{
    background-color: #ccc;
  }
`;
