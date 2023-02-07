import Box from "@mui/material/Box";
import { Button, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"; // Grid version 1
import { CustomizedCard } from "../shared/card-styled";

import InfoCard from "../infocard/infocard";

function AdSection() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        sx={{
          justifyContent: "space-around",
          flexDirection: { xs: "column", md: "row" },
          padding: 10,
        }}
      >
        <Grid xs={12} md={3}>
          <InfoCard
            title="ŚWIETNE JEDZENIE"
            contents="Nasi kucharze zabiorą cię w podróż do nieodkrytych smaków w
          klasycznych potrawach."
          />
        </Grid>
        <Grid xs={12} md={3}>
          <InfoCard
            title="MOC ATRAKCJI"
            contents="Muzyka na żywo, atrakcje dla rodzin z dziećmi, wieczorki
          taneczne. Obserwuj nas na bieżąco by niczego nie stracić"
          />
        </Grid>
        <Grid xs={12} md={3}>
          <InfoCard
            title="DOSKONAŁA NA RODZINNY BANKIET"
            contents="Atmosfera, przyjemne wnętrze, miła obsługa i świetne dania to
          gwarancja udanej imprezy, dostosowanej do Twoich upodobań."
          />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          margin: 0,
          width: "100%",
          backgroundColor: "#1a1a1a",
        }}
      >
        <Grid sx={{ display: { xs: "none", md: "block" } }} md={5}>
          <img
            src="https://i.imgur.com/XVOkpZn.jpg"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Grid>
        <Grid xs={12} md={7}>
          <CustomizedCard>
            <CardContent>
              <Typography variant="h5" component="div" textAlign="left">
                RESTAURACJA ZACHWYCA ORYGINALNYM WNĘTRZEM, MIŁĄ OBSŁUGĄ ALE
                PRZEDE WSZYSTKIM WYSOKĄ JAKOŚCIĄ SERWOWANYCH DAŃ.
              </Typography>
              <Button>Zamów teraz</Button>
            </CardContent>
          </CustomizedCard>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AdSection;
