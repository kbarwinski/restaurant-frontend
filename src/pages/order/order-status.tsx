import { useParams } from "react-router-dom";
import { OrderApi } from "../../api/order";
import { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { CenteringContainer } from "../../components/shared/page-container-styled";
import { orderStatus } from "../../constants/enumTranslations";

const OrderStatusPage = () => {
  const { id } = useParams();

  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    const getOrder = async () => {
      return await OrderApi.getByUUID(id as string);
    };
    getOrder()
      .then((x) => {
        setOrder(x.data);
      })
      .catch(console.error);
  }, [id]);

  return (
    <Container maxWidth="md" sx={{ pt: 30 }}>
      {order !== null && (
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h5" component="h1" gutterBottom>
              Zamówienie {order.publicId}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" component="h1" gutterBottom>
              Status zamówienia:{" "}
              {orderStatus[order.status as keyof typeof orderStatus]}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" component="h1" gutterBottom>
              Zamówione produkty:
            </Typography>
            {order.orderItems.map((x: any) => {
              return (
                <Typography variant="body1" component="p" gutterBottom>
                  {x.product.name} x {x.quantity}
                </Typography>
              );
            })}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" component="h1" gutterBottom>
              Do zapłaty: {order.totalPrice} zł
            </Typography>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default OrderStatusPage;
