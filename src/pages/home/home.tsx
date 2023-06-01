import { PageContainerNoPadding } from '../../components/shared/page-container-styled';
import CustomCarousel from '../../components/home/carousel/carousel';
import AdSection from '../../components/home/adsection/adsection';
import Map from '../../components/map/map';
import ContactSection from '../../components/contact/contactsection/contactsection';

function HomePage() {
  return (
    <PageContainerNoPadding>
      <CustomCarousel />
      <AdSection />
      <Map />
      <ContactSection />
    </PageContainerNoPadding>
  );
}

export default HomePage;
