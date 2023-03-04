import {
  CenteringContainer,
  PageContainer,
} from "../../components/shared/page-container-styled";
import { H3Title, H5Left, H5Right } from "../../components/shared/typography-styled";

function AboutPage() {
  return (
    <PageContainer>
      <CenteringContainer>
        <H3Title
        variant="h3"
        color={"white"}
        >
          O nas
        </H3Title>
        <H5Left
        variant="h6"
        >
          Od 1992 roku w tym samym miejscu.
        </H5Left>
        <H5Right
        variant="h6"
        >
          Restauracja Marie to firma rodzinna, prowadzona od początku jej
          istnienia przez te same osoby. Obsłużyliśmy tysiące zadowolonych z
          naszych usług gości.
        </H5Right>
        <H5Left
        variant="h6"
        >
          Perfekcja wypracowana przez lata gwarantuje pełne zadowolenie.
        </H5Left>
        <H5Right
        variant="h6"
        >
          Serwowane przez nas dania przygotowywane są każdego dnia z najlepszych
          składników dostępnych na rynku.
        </H5Right>
        <H5Left
        variant="h6"
        >
          Codzienne dostawy pochodzą wyłącznie od sprawdzonych dostawców, a
          każde z dań przygotowywane jest od podstaw przez doświadczonych
          kucharzy.
        </H5Left>
        <H5Right
        variant="h6"
        >
          Dokładamy wszelkich starań, by dogodzić gustom naszych klientów, by
          nasz lokal stał się miejscem dla osób, które przykładają wagę do
          wartościowych posiłków, jakości oraz doskonałego smaku potraw.
        </H5Right>
        <H5Left
        variant="h6"
        >
          Nasze dania serwujemy również u klienta w opcji z dostawą lub w opcji
          odbioru osobistego.
        </H5Left>
        <H5Right
        variant="h6"
        >
          Zobacz co mamy dla Ciebie w naszym MENU.
        </H5Right>
      </CenteringContainer>
    </PageContainer>
  );
}

export default AboutPage;
