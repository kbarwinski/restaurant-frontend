import { ModalFormContainer, StyledTextField } from "../../shared/form-styled";
import Button from "@mui/material/Button/Button";
import { H3Title } from "../../shared/typography-styled";
import { useRef } from "react";
import { AuthApi } from "../../../api/auth";

function RegistrationForm(props:{closeModal:any}) {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const phone = useRef<HTMLInputElement>(null);

  const name = useRef<HTMLInputElement>(null);
  const surname = useRef<HTMLInputElement>(null);

  const street = useRef<HTMLInputElement>(null);
  const streetNumber = useRef<HTMLInputElement>(null);
  const houseNumber = useRef<HTMLInputElement>(null);

  async function handleRegistration(){
    const result = await AuthApi.register({
      email: email.current?.value ?? "",
      password: password.current?.value ?? "",
      phone: phone.current?.value ?? "",
      name: name.current?.value ?? "",
      surname: surname.current?.value ?? "",
      street: street.current?.value ?? "",
      streetNumber: streetNumber.current?.value ?? "",
      houseNumber: houseNumber.current?.value ?? "",
    });

    props.closeModal();
  }

  return (
    <ModalFormContainer>
      <H3Title variant="h4">Zarejestruj się</H3Title>
      <StyledTextField id="outlined-basic" label="Imię" variant="outlined" inputRef={name} />
      <StyledTextField id="outlined-basic" label="Nazwisko" variant="outlined" inputRef={surname} />
      <StyledTextField id="outlined-basic" label="Email" variant="outlined" inputRef={email} />
      <StyledTextField
        id="outlined-basic"
        label="Hasło"
        type="password"
        variant="outlined"
        inputRef={password}
      />
      <StyledTextField
        id="outlined-basic"
        label="Numer telefonu"
        type="phone"
        variant="outlined"
        inputRef={phone}
      />
      <StyledTextField id="outlined-basic" label="Nazwa ulicy" variant="outlined" inputRef={street} />
      <StyledTextField id="outlined-basic" label="Numer ulicy" variant="outlined" inputRef={streetNumber} />
      <StyledTextField id="outlined-basic" label="Numer domu" variant="outlined" inputRef={houseNumber} />
      <Button
        variant="contained"
        size="large"
        sx={{
          fontWeight: 900,
          letterSpacing: ".3rem",
          textDecoration: "none",
          margin: "1rem",
        }}
        onClick={handleRegistration}
      >
        Zarejestruj
      </Button>
    </ModalFormContainer>
  );
}

export default RegistrationForm;
