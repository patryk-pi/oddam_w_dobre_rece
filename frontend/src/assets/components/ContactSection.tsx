import ContactForm from "./ContactForm";
import Decoration from "./Decoration";
import { StyledContactForm } from "./styles/ContactForm.styled";
import { StyledContactSection } from "./styles/ContactSection.styled";

const ContactSection = () => {
    return (
        <StyledContactSection>
            <ContactForm></ContactForm>
        </StyledContactSection>
    );
};

export default ContactSection;
