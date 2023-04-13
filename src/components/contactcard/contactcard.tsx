import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import { CustomizedCard } from '../shared/card-styled';
import { ContactCardContent } from '../../constants/contactcardcontents';

export interface CardProps {
  title: string;
  contents: ContactCardContent[];
}

function ContactCard(props: CardProps) {
  return (
    <CustomizedCard>
      <CardContent>
        <Typography variant="h4" component="div">
          {props.title}
        </Typography>
        {props.contents.map((x) => {
          return (
            <div>
              <Typography variant="h5">{x.label}</Typography>
              <Typography variant="body2">{x.info}</Typography>
            </div>
          );
        })}
      </CardContent>
    </CustomizedCard>
  );
}

export default ContactCard;
