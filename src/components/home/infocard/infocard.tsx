import { CardContent } from "@mui/material";
import { CustomizedCard } from "../../shared/card-styled";
import { H5Base } from "../../shared/typography-styled";

export interface CardProps {
  title: string;
  contents: string;
}

function InfoCard(props: CardProps) {
  return (
    <CustomizedCard>
      <CardContent>
        <H5Base>
          {props.title}
        </H5Base>
        <H5Base>{props.contents}</H5Base>
      </CardContent>
    </CustomizedCard>
  );
}

export default InfoCard;
