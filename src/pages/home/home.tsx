import { PageContainerNoPadding } from '../../components/shared/page-container-styled';
import CustomCarousel from '../../components/home/carousel/carousel';
import AdSection from '../../components/home/adsection/adsection';
import Map from '../../components/map/map';
 
function HomePage(){
    return(
        <PageContainerNoPadding>
            <CustomCarousel/>
            <AdSection/>
            <Map/>
        </PageContainerNoPadding>
    );
}

export default HomePage;