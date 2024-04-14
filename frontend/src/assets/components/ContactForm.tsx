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
                <label htmlFor="message">Wpisz swoją wiadomość</label>
                <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={4}
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
            </form>
        </StyledContactForm>
    );
};
export default ContactForm;
