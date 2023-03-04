import { FormContainer } from "./registrationform-styled";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";
import { H3Title } from "../shared/typography-styled";

function RegistrationForm() {
  return (
    <FormContainer>
      <H3Title variant="h4">Zarejestruj sie</H3Title>
      <TextField id="outlined-basic" label="Login" variant="outlined" />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField
        id="outlined-basic"
        label="Hasło"
        type="password"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Numer telefonu"
        type="phone"
        variant="outlined"
      />
      <TextField id="outlined-basic" label="Nazwa ulicy" variant="outlined" />
      <TextField id="outlined-basic" label="Numer ulicy" variant="outlined" />
      <TextField id="outlined-basic" label="Numer domu" variant="outlined" />
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
        Zarejestruj
      </Button>
    </FormContainer>
  );
}

export default RegistrationForm;
