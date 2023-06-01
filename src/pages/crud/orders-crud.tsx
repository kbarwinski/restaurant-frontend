import { Typography } from "@mui/material";
import ReservationForm from "../../components/reservationform/reservationform";
import { PageContainer } from "../../components/shared/page-container-styled";
import OrderList from "../../components/order/orders-list";
import { useEffect, useState } from "react";
import { OrderApi, PaginationArgs } from "../../api/order";

function OrdersCrudPage() {
    const [data, setData] = useState([]);
    const [pagination, setPagination] = useState<PaginationArgs>({
      page: 0,
      size: 10,
      sort: "Id,ASC",
    });
  
    useEffect(() => {
      const getProducts = async () => {
        return await OrderApi.getOrders(pagination);
      };

      getProducts()
        .then((x) => {  
          setData(x.data);
        })
        .catch(console.error);
  
    }, [pagination]);

  return (
    <PageContainer>
      <Typography variant="h6">Order List</Typography>
      <OrderList orders={data} />
    </PageContainer>
  );
}

export default OrdersCrudPage;
