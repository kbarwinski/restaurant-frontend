import { CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CustomizedCard } from "../shared/card-styled";

export interface CardProps {
  title: string;
  contents: string;
}

function InfoCard(props: CardProps) {
  return (
    <CustomizedCard>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2">{props.contents}</Typography>
      </CardContent>
    </CustomizedCard>
  );
}

export default InfoCard;
