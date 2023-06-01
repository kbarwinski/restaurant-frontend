import { CardContent, CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CustomizedCard } from "../../shared/card-styled";
import { CartOverlay, PriceText } from "./menucard-styled-vanilla";
import IconButton from "@mui/material/IconButton/IconButton";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCart from "@mui/icons-material/RemoveShoppingCart";

export interface MenuCardProps {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

export interface MenuCardActions {
  addAction: (item: MenuCardProps) => void;
  removeAction: (item: MenuCardProps) => void;
}

export interface MenuCardInterface{
  item: MenuCardProps;
  quantity: number;
  actions: MenuCardActions;
}

function MenuCard(props: MenuCardInterface) {
  return (
    <CustomizedCard>
      <CardMedia
        component="img"
        image={props.item.imageUrl}
        title={props.item.name}
        style={{
          height: "15vh",
        }}
      ></CardMedia>
      <CartOverlay>
        <PriceText>{props.item.price} zł</PriceText>
        <IconButton onClick={()=>props.actions.addAction(props.item)}>
          <AddShoppingCart />
        </IconButton>
        <IconButton disabled={props.quantity<=0} onClick={()=>props.actions.removeAction(props.item)}>
          <RemoveShoppingCart />
        </IconButton>
      </CartOverlay>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.item.name}
        </Typography>
        <Typography variant="body2">{props.item.description}</Typography>
      </CardContent>
    </CustomizedCard>
  );
}

export default MenuCard;  
