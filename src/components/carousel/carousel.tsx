import { customFadeAnimationHandler } from "./fade-animation";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import {
  ImageContainer,
  CarouselContainer,
  WelcomeTextContainer,
  DarkOverlay,
} from "./carousel-styled";
import { Button, Typography } from "@mui/material";

function CustomCarousel() {
  return (
    <CarouselContainer>
      <DarkOverlay />
      <Carousel
        transitionTime={2000}
        interval={5000}
        autoPlay={true}
        autoFocus={true}
        infiniteLoop={true}
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        stopOnHover={false}
        animationHandler={customFadeAnimationHandler}
      >
        <ImageContainer src="https://i.imgur.com/QBMYY8v.jpg" />
        <ImageContainer src="https://i.imgur.com/SBwhZzZ.jpg" />
      </Carousel>
      <WelcomeTextContainer>
        <Typography
          variant="h5"
          noWrap
          sx={{
            mt: 1,
            mb: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "white",
            textDecoration: "none",
          }}
        >
          ODWIEDZ NAS!
        </Typography>
        <Typography
          variant="h4"
          noWrap
          sx={{
            mt: 1,
            mb: 3,
            fontFamily: "monospace",
            fontWeight: 600,
            letterSpacing: ".1rem",
            color: "white",
            textDecoration: "none",
          }}
        >
          ODKRYJ DOSKONAŁE JEDZENIE I ŚWIETNĄ ZABAWĘ BLISKO CIEBIE
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            width: "50%",
            alignSelf: "center",
            fontFamily: "monospace",
            fontWeight: 900,
            letterSpacing: ".3rem",
            color: "white",
            textDecoration: "none",
          }}
        >
          MENU / ZAMOW ONLINE
        </Button>
      </WelcomeTextContainer>
    </CarouselContainer>
  );
}

export default CustomCarousel;
