import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { orderStatus } from "../../constants/enumTranslations";

const OrderList = ({ orders }: any) => {
  return (
    <List>
      {orders.map((order: any, index: number) => orderItem(order, index))}
    </List>
  );

  function orderItem(order: any, index: number) {
    return (
      <React.Fragment key={order.id}>
        <ListItem alignItems="flex-start">
          <Avatar
            alt={order.user.contact.name}
            src={order.orderItems[0].product.imageUrl}
          />
          <ListItemText
            primary={`Order ID: ${order.id}`}
            secondary={
              <>
                <Typography
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Klient: {order.user.contact.name} {order.user.contact.surname}
                  , {order.user.email}, {order.user.contact.phoneNumber}
                </Typography>
                <br />
                <Typography
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Adres: {order.address.streetName}{" "}
                  {order.address.streetNumber}/{order.address.aptNumber},{" "}
                  {order.address.cityName}
                </Typography>
                <br />
                <Typography
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Status:{" "}
                  {orderStatus[order.status as keyof typeof orderStatus]}
                </Typography>
                <br />
                <Typography
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Utworzono: {order.orderDate}
                </Typography>
                <br />
                {order.completionDate !== null && (
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Zakończono: {order.completionDate}
                    </Typography>
                    <br />
                  </>
                )}
                {order.orderItems.map((orderItem: any, index: number) => (
                  <React.Fragment key={orderItem.id}>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {orderItem.product.name} x {orderItem.quantity}
                    </Typography>
                    <br />
                  </React.Fragment>
                ))}
                <Typography
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Kwota zamówienia: {order.totalPrice.toFixed(2)} PLN
                </Typography>
                <br />
              </>
            }
          />
        </ListItem>
        {index !== orders.length - 1 && (
          <Divider variant="inset" component="li" />
        )}
      </React.Fragment>
    );
  }
};

export default OrderList;
