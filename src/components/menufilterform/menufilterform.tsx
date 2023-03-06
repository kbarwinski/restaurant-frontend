import { FormContainer } from "./menufilterform-styled";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";
import { H3Title } from "../shared/typography-styled";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { PaginationArgs } from "../../api/product";

export interface FilterProps {
  pagination: PaginationArgs;
  setPagination: any;
}

function MenuFilterForm(props: FilterProps) {
  const [sortOrder, setSortOrder] = useState(props.pagination.sort);
  const [name, setName] = useState(props.pagination.name);
  const [minPrice, setMinPrice] = useState(props.pagination.minPrice);
  const [maxPrice, setMaxPrice] = useState(props.pagination.maxPrice);
  const [size, setSize] = useState(props.pagination.size);

  const updatePagination = function () {
    let newPagination: PaginationArgs = {
      name: name,
      minPrice: minPrice,
      maxPrice: maxPrice,
      page: props.pagination.page,
      sort: sortOrder,
      size: size,
    };

    props.setPagination(newPagination);
  };

  return (
    <FormContainer>
      <H3Title variant="h4">Filtruj wyniki</H3Title>
      <TextField
        id="outlined-basic"
        label="Nazwa"
        variant="outlined"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <TextField
        id="outlined-basic"
        label="Cena od"
        type="number"
        variant="outlined"
        value={minPrice}
        onChange={(e) => {
          setMinPrice(parseInt(e.target.value));
        }}
      />
      <TextField
        id="outlined-basic"
        label="Cena do"
        type="number"
        variant="outlined"
        defaultValue={500}
        value={maxPrice}
        onChange={(e) => {
          setMaxPrice(parseInt(e.target.value));
        }}
      />
      <TextField
        id="outlined-basic"
        label="Ilość na stronę"
        type="number"
        variant="outlined"
        defaultValue={5}
        value={size}
        onChange={(e) => {
          setSize(parseInt(e.target.value));
        }}
      />
      <InputLabel id="demo-simple-select-label">
        Kolejność sortowania
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sortOrder}
        label="Kolejność sortowania"
        onChange={(event) => {
          setSortOrder(event.target.value);
        }}
      >
        <MenuItem value={"price, asc"}>Cena rosnąco</MenuItem>
        <MenuItem value={"price, desc"}>Cena malejąco</MenuItem>
        <MenuItem value={"name, asc"}>Nazwa rosnąco</MenuItem>
        <MenuItem value={"name, desc"}>Nazwa malejąco</MenuItem>
      </Select>
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
        onClick={updatePagination}
      >
        Filtruj
      </Button>
    </FormContainer>
  );
}

export default MenuFilterForm;
