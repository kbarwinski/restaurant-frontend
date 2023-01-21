import{
    HomePageContainer,
} from './home-styled';
import CustomCarousel from '../../components/carousel/carousel';
import AdSection from '../../components/adsection/adsection';
import ContactSection from '../../components/contactsection/contactsection';
 
function HomePage(){
    return(
        <HomePageContainer>
            <CustomCarousel/>
            <AdSection/>
            <ContactSection/>
        </HomePageContainer>
    );
}

export default HomePage;