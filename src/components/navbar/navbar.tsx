import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import {
  CustomizedAppBar,
  CustomizedToolbar,
  CustomizedButton,
  CustomizedButtonContainer,
  CustomizedLink,
} from './navbar-styled';
import LoginModal from '../loginmodal/loginmodal';
import RegistrationModal from '../registrationmodal/registrationmodal';

function NavBar() {
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
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
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
          <LoginModal />
          <RegistrationModal />
        </CustomizedButtonContainer>
      </CustomizedToolbar>
    </CustomizedAppBar>
  );
}
export default NavBar;
