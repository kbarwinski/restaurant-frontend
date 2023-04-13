import { FormContainer, SpaceA, SpaceB, SpaceC } from './contactform-styled';
import TextField from '@mui/material/TextField/TextField';
import Button from '@mui/material/Button/Button';
function ContactForm() {
  return (
    <FormContainer>
      <SpaceA>
        <TextField
          id="outlined-basic"
          label="Imie i nazwisko*"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Email*" variant="outlined" />
        <TextField id="outlined-basic" label="Telefon" variant="outlined" />
      </SpaceA>

      <SpaceB>
        <TextField id="outlined-basic" label="Temat" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Wiadomosc"
          variant="outlined"
          multiline
          rows={3}
        />
      </SpaceB>

      <SpaceC>
        <Button
          variant="contained"
          size="large"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 900,
            letterSpacing: '.3rem',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Wyslij wiadomosc
        </Button>
      </SpaceC>
    </FormContainer>
  );
}

export default ContactForm;
