import { ModalFormContainer, StyledTextField } from "../../shared/form-styled";
import Button from "@mui/material/Button/Button";
import { H3Title } from "../../shared/typography-styled";
import { Handler } from "leaflet";
import { useRef } from "react";
import { AuthApi } from "../../../api/auth";
import { useAppDispatch } from "../../../store/hooks";
import { login } from "../../../store/slices/authSlice";

function LoginForm(props:{closeModal:any}) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  async function handleLogin() {
    try{
      let res = await AuthApi.login({
        email: emailRef.current?.value || "",
        password: passwordRef.current?.value || "",
      });

      dispatch(login(res.data));
      
      props.closeModal();
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <ModalFormContainer>
      <H3Title variant="h4">Zaloguj sie</H3Title>
      <StyledTextField id="outlined-basic" label="Login/Email" variant="outlined" inputRef={emailRef} />
      <StyledTextField
        id="outlined-basic"
        label="Hasło"
        type="password"
        variant="outlined"
        inputRef={passwordRef}
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
        onClick={() => {handleLogin()}}
      >
        Zaloguj się
      </Button>
    </ModalFormContainer>
  );
}

export default LoginForm;
