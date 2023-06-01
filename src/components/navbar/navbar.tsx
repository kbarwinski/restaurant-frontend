import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logout } from "../../store/slices/authSlice";
import { Menu, MenuItem } from "@mui/material";

import {
  CustomizedAppBar,
  CustomizedToolbar,
  CustomizedButton,
  CustomizedButtonContainer,
  CustomizedLink,
} from "./navbar-styled";
import LoginModal from "../login/loginmodal/loginmodal";
import RegistrationModal from "../registration/registrationmodal/registrationmodal";
import { selectCount } from "../../store/slices/cartSlice";
import { Fragment, useState } from "react";

function NavBar() {
  const itemsCount = useAppSelector((state) => selectCount(state));
  const auth = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  console.log(auth);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <CustomizedAppBar>
      <CustomizedToolbar>
        <Container maxWidth="md">
          <CustomizedLink to="/">
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              Restauracja Testowa
            </Typography>
          </CustomizedLink>
        </Container>

        <CustomizedButtonContainer maxWidth="xl">
          <CustomizedLink to="/menu">
            <CustomizedButton>Menu/Zamów</CustomizedButton>
          </CustomizedLink>
          <CustomizedLink to="/reservations">
            <CustomizedButton>Rezerwacje</CustomizedButton>
          </CustomizedLink>
          <CustomizedLink to="/about">
            <CustomizedButton>O nas</CustomizedButton>
          </CustomizedLink> 
          <CustomizedLink to="/contact">
            <CustomizedButton>Kontakt</CustomizedButton>
          </CustomizedLink>
        </CustomizedButtonContainer>

        <CustomizedButtonContainer maxWidth="md">
          {auth.userRole === "ROLE_ADMINISTRATOR" && (
            <Fragment>
              <CustomizedButton
                aria-controls="admin-menu"
                aria-haspopup="true"
                onClick={handleMenuOpen}
              >
                Admin Panel
              </CustomizedButton>
              <Menu
                id="admin-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
                <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
                <MenuItem onClick={handleMenuClose}>Option 3</MenuItem>
              </Menu>
            </Fragment>
          )}
          {(auth.userRole === "ROLE_EMPLOYEE" ||
            auth.userRole === "ROLE_ADMINISTRATOR") && (
            <Fragment>
              <CustomizedButton
                aria-controls="employee-menu"
                aria-haspopup="true"
                onClick={handleMenuOpen}
              >
                Employee Panel
              </CustomizedButton>
              <Menu
                id="employee-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>
                  <CustomizedLink to="/crud/orders">
                    <CustomizedButton>Zamówienia</CustomizedButton>
                  </CustomizedLink>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
                <MenuItem onClick={handleMenuClose}>Option 3</MenuItem>
              </Menu>
            </Fragment>
          )}

          {auth.token === null && (
            <Fragment>
              <LoginModal />
              <RegistrationModal />
            </Fragment>
          )}
          {auth.token !== null && (
            <CustomizedButton onClick={handleLogout}>Wyloguj</CustomizedButton>
          )}
          <CustomizedLink to="/cart">
            <CustomizedButton>
              Koszyk {itemsCount > 0 ? itemsCount : ""}
            </CustomizedButton>
          </CustomizedLink>
        </CustomizedButtonContainer>
      </CustomizedToolbar>
    </CustomizedAppBar>
  );
}
export default NavBar;
