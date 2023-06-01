import { useParams } from "react-router-dom";
import { OrderApi } from "../../api/order";
import { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { CenteringContainer } from "../../components/shared/page-container-styled";

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
    <Container maxWidth="md" sx={{pt:50}}>
        {order !== null && (
      <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h1" gutterBottom>
          Status zamówienia
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" component="h2" gutterBottom>
          {order.status}
        </Typography>
      </Grid>
    </Grid>
        )}
    </Container>
  );
};

export default OrderStatusPage;
