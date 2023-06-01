import { CardContent } from "@mui/material";
import { CustomizedCard } from "../../shared/card-styled";
import { ContactCardContent } from "../../../constants/contactcardcontents";
import { H3Title, H5Packed } from "../../shared/typography-styled";

export interface CardProps {
  title: string;
  contents: ContactCardContent[];
}

function ContactCard(props: CardProps) {
  return (
    <CustomizedCard>
      <CardContent>
        <H3Title>
        {props.title}
        </H3Title>
        {props.contents.map((x) => {
          return (
            <div>
              <H5Packed>{x.label}</H5Packed>
              <H5Packed>{x.info}</H5Packed>
            </div>
          );
        })}
      </CardContent>
    </CustomizedCard>
  );
}

export default ContactCard;
