import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { PaginationArgs, ProductApi } from "../../api/product";
import MenuFilterForm from "../../components/menu/menufilterform/menufilterform";
import MenuGrid from "../../components/menu/menugrid/menugrid";
import { PageContainer } from "../../components/shared/page-container-styled";
import { useAppSelector } from "../../store/hooks";
import { H3Title } from "../../components/shared/typography-styled";
import { Button } from "@mui/material";

function CartPage() {
  const cartItems = useAppSelector((state) => state.cart.items);


  function itemsGrid(){
    return(
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <MenuGrid items={cartItems.map(x=>x.item)} />
        </Grid>
        <Button>Zamów</Button>
      </Grid>
    )
  }

  function emptyNotice(){
    return(
      <H3Title>Brak przedmiotów w koszyku...</H3Title>
    )
  }
  //Style Mui Grid Components for responsive filter form
  return (
    <PageContainer> 
      {{cartItems}.cartItems.length > 0 ? itemsGrid() : emptyNotice()}
    </PageContainer>
  );
}

export default CartPage;
