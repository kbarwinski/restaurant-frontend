import { useEffect, useState } from "react";

import { FormContainer, StyledTextField } from "../shared/form-styled";
import Button from "@mui/material/Button/Button";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Moment } from "moment";

import moment from "moment";
import { H3Title } from "../shared/typography-styled";
import { ReservationApi } from "../../api/reservation";
import { ButtonGroup } from "@mui/material";



function ReservationForm() {
  const start = moment();
  const remainder = 60 - (start.minute() % 60);

  const [startValue, setStartValue] = useState<Moment | null>(
    moment(start).add(remainder, "minutes")
  );

  const [endValue, setEndValue] = useState<Moment | null>(
    moment(start).add(remainder, "minutes").add(60, "minutes")
  );

  const handleStartChange = (newValue: Moment | null) => {
    setStartValue(newValue);
  };

  const handleEndChange = (newValue: Moment | null) => {
    setEndValue(newValue);
  };

  const handleReservation = async () => {
    if (startValue && endValue && selectedTable) {
      const reservation = {
        startDateTime: startValue.format("YYYY-MM-DDTHH:mm"),
        endDateTime: endValue.format("YYYY-MM-DDTHH:mm"),
        reservationTableId: selectedTable,
      };
      const result = await ReservationApi.createReservation(reservation);
      console.log(result);
    }
  };

  const [tables, setTables] = useState<any[]>([]);
  const [selectedTable, setSelectedTable] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const result = await ReservationApi.getAllTables();
      setTables(
        result.data.map((x: any) => {
          return { ...x, isAvailable: false };
        })
      );
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchFilteredTables = async () => {
      if (startValue && endValue) {
        const result = await ReservationApi.getAvailableTables(
          startValue.format("YYYY-MM-DDTHH:mm"),
          endValue.format("YYYY-MM-DDTHH:mm")
        );
        setTables(result.data.map((x: any) => ({ ...x, isAvailable: true })));
      }
    };

    fetchFilteredTables();
  }, [startValue, endValue]);

  const handleTableSelection = (tableId: number) => {
    setSelectedTable(tableId);
  };

  return (
    <FormContainer style={{height:"80vh", width:"100%"}}>
      <H3Title variant="h3">Zarezerwuj stolik</H3Title>

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DateTimePicker
          label="Data i godzina rozpoczecia*"
          value={startValue}
          disablePast={true}
          minutesStep={15}
          maxDateTime={moment(startValue).add(1, "year")}
          onChange={handleStartChange}
          renderInput={(params) => <StyledTextField {...params} />}
        />

        <DateTimePicker
          label="Data i godzina zakonczenia*"
          value={endValue}
          disablePast={true}
          minutesStep={15}
          minDateTime={moment(startValue).add(44, "minute")}
          maxDateTime={moment(startValue).add(1, "day")}
          onChange={handleEndChange}
          renderInput={(params) => <StyledTextField {...params} />}
        />

        <StyledTextField
          id="outlined-basic"
          label="Uwagi"
          variant="outlined"
          multiline
          rows={3}
        />

        <h3>Available Tables</h3>
        <ButtonGroup
        >
          {tables.map((table) => (
            <Button
              key={table.id}
              variant={selectedTable === table.id ? "contained" : "outlined"}
              disabled={!table.isAvailable}
              onClick={() => handleTableSelection(table.id)}
            >
              Table {table.number} ({table.seats} seats)
            </Button>
          ))}
        </ButtonGroup>

        <Button
          variant="contained"
          size="large"
          onClick={handleReservation}
          disabled={!selectedTable}
          sx={{
            fontFamily: "monospace",
            fontWeight: 900,
            letterSpacing: ".3rem",
            color: "white",
            textDecoration: "none",
            marginTop: "2rem",
          }}
        >
          Rezerwuj stolik
        </Button>
      </LocalizationProvider>
    </FormContainer>
  );
}

export default ReservationForm;
