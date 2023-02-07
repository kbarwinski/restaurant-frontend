import { FormContainer } from "./loginform-styled";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";

function LoginForm() {
  return (
    <FormContainer>
        <TextField
          id="outlined-basic"
          label="Login/Email"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Hasło"
          type="password"
          variant="outlined"
        />
        <Button
          variant="contained"
          size="large"
          sx={{
            fontFamily: "monospace",
            fontWeight: 900,
            letterSpacing: ".3rem",
            color: "white",
            textDecoration: "none",
          }}
        >
          Zaloguj się
        </Button>
    </FormContainer>
  );
}

export default LoginForm;
