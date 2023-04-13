import { PageContainerNoPadding } from '../../components/shared/page-container-styled';
import CustomCarousel from '../../components/carousel/carousel';
import AdSection from '../../components/adsection/adsection';
import Map from '../../components/map/map';

function HomePage() {
  return (
    <PageContainerNoPadding>
      <CustomCarousel />
      <AdSection />
      <Map />
    </PageContainerNoPadding>
  );
}

export default HomePage;
