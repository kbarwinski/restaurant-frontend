import { useState } from 'react';

import TextField from '@mui/material/TextField/TextField';
import Button from '@mui/material/Button/Button';

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Moment } from 'moment';

import { FormContainer } from './reservationform-styled';
import moment from 'moment';
import { H3Title } from '../shared/typography-styled';

function ReservationForm() {
  const start = moment();
  const remainder = 60 - (start.minute() % 60);

  const [value, setValue] = useState<Moment | null>(
    moment(start).add(remainder, 'minutes'),
  );

  const handleChange = (newValue: Moment | null) => {
    setValue(newValue);
  };

  return (
    <FormContainer>
      <H3Title variant="h3">Zarezerwuj stolik</H3Title>

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DateTimePicker
          label="Data i godzina*"
          value={value}
          disablePast={true}
          minutesStep={15}
          maxDateTime={moment(value).add(1, 'year')}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />

        <TextField
          id="outlined-basic"
          label="Imie i nazwisko*"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Email*" variant="outlined" />
        <TextField id="outlined-basic" label="Telefon*" variant="outlined" />

        <TextField
          id="outlined-basic"
          label="Uwagi"
          variant="outlined"
          multiline
          rows={3}
        />
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
          Rezerwuj stolik
        </Button>
      </LocalizationProvider>
    </FormContainer>
  );
}

export default ReservationForm;
