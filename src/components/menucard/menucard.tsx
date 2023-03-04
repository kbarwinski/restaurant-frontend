import { CardContent, CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CustomizedCard } from "../shared/card-styled";

export interface MenuCardProps {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

function MenuCard(props: MenuCardProps) {
  return (
    <CustomizedCard>
        <CardMedia
        component="img"
        image={props.imageUrl}
        title={props.name}
        style={{
          height:'15vh'
        }}
        />
      <CardContent>
      <Typography variant="h5" component="div">
          {props.name}
      </Typography>
        <Typography variant="body2">
          {props.description}
        </Typography>
      </CardContent>
    </CustomizedCard>
  );
}

export default MenuCard;
