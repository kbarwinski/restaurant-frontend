import { PageContainer } from "../../components/shared/page-container-styled";
import ContactForm from "../../components/contact/contactform/contactform";
import Map from "../../components/map/map";
import { H3Title } from "../../components/shared/typography-styled";
import ContactSection from "../../components/contact/contactsection/contactsection";

function ContactPage() {
  return (
    <PageContainer>
      <H3Title variant="h3">Kontakt</H3Title>
      <ContactForm />
      <Map />
      <ContactSection />
    </PageContainer>
  );
}

export default ContactPage;
