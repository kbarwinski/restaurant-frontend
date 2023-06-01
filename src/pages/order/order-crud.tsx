import { Typography } from "@mui/material";
import { PageContainer } from "../../components/shared/page-container-styled";
import OrderList from "../../components/order/orders-list";

function OrderCrudPage() {
  return (
    <PageContainer>
      <Typography variant="h6">Order List</Typography>
      <OrderList/>
    </PageContainer>
  );
}

export default OrderCrudPage;
