import Decoration from "./Decoration";
import { StyledContactForm } from "./styles/ContactForm.styled";

const ContactForm = () => {
    return (
        <StyledContactForm>
            <h2>Skontaktuj się z nami</h2>
            <Decoration />

            <form>
                <div>
                    <div>
                        <label htmlFor="name">Wpisz swoje imię</label>
                        <input type="text" placeholder="Krzysztof" />
                    </div>
                    <div>
                        <label htmlFor="mail">Wpisz swój email</label>
                        <input type="text" placeholder="abc@xyz.pl" />
                    </div>
                </div>
                <label htmlFor="message"></label>
                <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                    placeholder="Wpisz swoją wiadomość..."
                />
            </form>
        </StyledContactForm>
    );
};
export default ContactForm;
