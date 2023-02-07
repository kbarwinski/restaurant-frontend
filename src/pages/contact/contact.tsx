import { PageContainer } from "../../components/shared/page-container-styled";
import ContactForm from "../../components/contactform/contactform";
import Map from "../../components/map/map";

function ContactPage(){
    return(
        <PageContainer>
            <ContactForm/>
            <Map/>
        </PageContainer>
    )
}

export default ContactPage;