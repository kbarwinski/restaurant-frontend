import { Container, Grid } from "@mui/material";
import MenuCard, { MenuCardProps } from "../menucard/menucard";

import { useAppSelector, useAppDispatch } from '../../../store/hooks'
import { addToCart, removeFromCart } from '../../../store/slices/cartSlice'

export interface MenuGridProps {
    items : MenuCardProps[];
}

function MenuGrid(props : MenuGridProps){

    const cartItems = useAppSelector((state) => state.cart.items);
    const dispatch = useAppDispatch();

    function addItemToCart(item:MenuCardProps){
        dispatch(addToCart(item));
        console.log(cartItems);
    }
    
    function removeItemFromCart(item:MenuCardProps){
        dispatch(removeFromCart(item));
        console.log(cartItems);
    }

    return(
        <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
            {props.items.map(x=>{
                return(
                    <Grid item xs={6} md={4}>
                        <MenuCard
                        item={x}
                        quantity={cartItems.find(y=>y.item.id===x.id)?.quantity || 0}
                        actions={{
                            addAction: addItemToCart,
                            removeAction: removeItemFromCart,
                        }}
                        />
                    </Grid>
                )
            })}
        </Grid>
            </Container>

    )
}

export default MenuGrid;