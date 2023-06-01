import MenuGrid from "../../components/menu/menugrid/menugrid";
import { PageContainer } from "../../components/shared/page-container-styled";
import { useAppSelector } from "../../store/hooks";
import { H3Title } from "../../components/shared/typography-styled";
import { Button } from "@mui/material";
import { OrderApi } from "../../api/order";
import { redirect } from "react-router-dom";

function CartPage() {
  const cartItems = useAppSelector((state) => state.cart.items);

  const placeOrder = async () => {
    try{
      const res = await OrderApi.createOrder({
        orderItems: cartItems.map((x) => ({
          productId: x.item.id,
          quantity: x.quantity,
        })),
      });
      redirect(`/order/${res.data.id}`);
    }
    catch(err){
      console.log(err);
    }
  };

  function itemsGrid() {
    return (
      <>
        <MenuGrid items={cartItems.map((x) => x.item)} />
        <Button onClick={placeOrder}>Zamów</Button>
      </>
    );
  }

  function emptyNotice() {
    return <H3Title>Brak przedmiotów w koszyku...</H3Title>;
  }
  //Style Mui Grid Components for responsive filter form
  return (
    <PageContainer>
        {{ cartItems }.cartItems.length > 0 ? itemsGrid() : emptyNotice()}
    </PageContainer>
  );
}

export default CartPage;
