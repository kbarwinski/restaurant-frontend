import { PageContainer } from "../../components/shared/page-container-styled";
import ContactForm from "../../components/contactform/contactform";
import Map from "../../components/map/map";
import { H3Title } from "../../components/shared/typography-styled";

function ContactPage(){
    return(
        <PageContainer>
            <H3Title
            variant="h3"
            >
                Kontakt
            </H3Title>
            <ContactForm/>
            <Map/>
        </PageContainer>
    )
}

export default ContactPage;