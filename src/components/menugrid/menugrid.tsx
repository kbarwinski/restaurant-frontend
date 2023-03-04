import { Grid } from "@mui/material";
import MenuCard, { MenuCardProps } from "../menucard/menucard";

export interface MenuGridProps {
    items : MenuCardProps[];
}

function MenuGrid(props : MenuGridProps){
    return(
        <Grid container spacing={2}>
            {props.items.map(x=>{
                return(
                    <Grid item xs={6} md={4}>
                        <MenuCard
                        description={x.description}
                        imageUrl={x.imageUrl}
                        name={x.name}
                        price={x.price}
                        key={x.name+x.price}
                        />
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default MenuGrid;