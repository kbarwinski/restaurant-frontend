import React from "react";
import "leaflet/dist/leaflet.css";

import { ContactContainer } from "./contactsection-styled";
import ContactCard from "../contactcard/contactcard";
import { AddressInfo, OpenTimeInfo } from "../../../constants/contactcardcontents";

export default function ContactSection() {
  return (
    <ContactContainer>
      <ContactCard title="KONTAKT" contents={AddressInfo} />
      <ContactCard title="GODZINY OTWARCIA" contents={OpenTimeInfo} />
    </ContactContainer>
  );
}
